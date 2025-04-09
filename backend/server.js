const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const crypto = require('crypto');
const QRCode = require('qrcode');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'mysecretkey';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/wallpay_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  agreement: { type: Boolean, required: true },
  captcha: { type: String },
  upiCode: { type: String }, // Added UPI field
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// JWT Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Signup
app.post('/api/signup', async (req, res) => {
  try {
    const { username, email, password, phone, agreement, captcha } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword, phone, agreement, captcha });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching users' });
  }
});

// Generate UPI code
app.post('/api/generate-upi', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.upiCode) {
      return res.status(200).json({ message: 'UPI code already generated', upiCode: user.upiCode });
    }

    const randomDigits = crypto.randomBytes(4).toString('hex');
    const upiCode = `UPI${user.username}wallpay${randomDigits}`;

    user.upiCode = upiCode;
    await user.save();

    res.status(201).json({ message: 'UPI code generated', upiCode });
  } catch (error) {
    res.status(500).json({ message: 'Server error during UPI generation' });
  }
});

// Get UPI QR
app.get('/api/upi', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user || !user.upiCode) return res.status(404).json({ message: 'UPI code not found' });

    const qrDataUrl = await QRCode.toDataURL(user.upiCode);

    res.status(200).json({
      upiCode: user.upiCode,
      qrCode: qrDataUrl,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching UPI' });
  }
});

// Add this after User model
const fundSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: String, required: true }, // UPI ID or mobile
  amount: { type: Number, required: true },
  mode: { type: String, enum: ['UPI', 'Mobile'], required: true },
}, { timestamps: true });

const Fund = mongoose.model('Fund', fundSchema);

// Fund Transfer Endpoint
app.post('/api/transfer', authenticateToken, async (req, res) => {
  try {
    const { recipient, amount, mode } = req.body;
    const sender = await User.findById(req.user.id);

    if (!sender) return res.status(404).json({ message: 'Sender not found' });

    // Avoid duplicate transactions
    const existingTransfer = await Fund.findOne({
      sender: sender._id,
      recipient,
      amount,
      mode,
      createdAt: { $gt: new Date(Date.now() - 60000) }, // within 1 min
    });

    if (existingTransfer) {
      return res.status(409).json({ message: 'Duplicate transaction detected' });
    }

    const newFund = new Fund({
      sender: sender._id,
      recipient,
      amount,
      mode,
    });

    await newFund.save();

    res.status(201).json({ message: 'Transfer successful', fund: newFund });
  } catch (error) {
    res.status(500).json({ message: 'Error during fund transfer' });
  }
});

// Fetch Sent and Received Transactions
app.get('/api/transactions', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Populate sender field with username for sent transactions
    const sent = await Fund.find({ sender: user._id })
      .populate('sender', 'username')
      .sort({ createdAt: -1 });

    // Find all received funds by UPI code, then attach sender details manually
    const receivedFunds = await Fund.find({ recipient: user.upiCode })
      .sort({ createdAt: -1 });

    const received = await Promise.all(receivedFunds.map(async (fund) => {
      const senderUser = await User.findById(fund.sender);
      return {
        ...fund.toObject(),
        sender: {
          _id: senderUser._id,
          username: senderUser.username,
        },
      };
    }));

    res.status(200).json({ sent, received });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Error fetching transactions' });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
