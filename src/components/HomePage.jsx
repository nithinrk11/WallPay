import React, { useState } from "react";
import { Carousel, Card, Space, Button, Flex, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SignupPage from "./SignupPage"; // Import SignupPage

import add1 from "../assets/1.png";
import add2 from "../assets/2.png";
import add3 from "../assets/3.png";
import add4 from "../assets/4.png";
import add5 from "../assets/5.png";
import add6 from "../assets/6.png";
import add7 from "../assets/7.png";
import add8 from "../assets/8.png";
import add9 from "../assets/9.png";

import "../Styles/HomePage/HomePageContents.css";
import "../Styles/HomePage/HomePageP2.css";

const { Meta } = Card;

const HomePage = () => {
  const [openSignup, setOpenSignup] = useState(false); // State for SignupPage

  return (
    <div>
      <div className="HomePageP1">
        <Carousel autoplay>
          <div className="HomePageCarousel"><img src={add1} alt="Ad 1" style={{ width: "100%" }} /></div>
          <div className="HomePageCarousel"><img src={add2} alt="Ad 2" style={{ width: "100%" }} /></div>
          <div className="HomePageCarousel"><img src={add3} alt="Ad 3" style={{ width: "100%" }} /></div>
          <div className="HomePageCarousel"><img src={add4} alt="Ad 4" style={{ width: "100%" }} /></div>
          <div className="HomePageCarousel"><img src={add5} alt="Ad 5" style={{ width: "100%" }} /></div>
        </Carousel>
      </div>

      <div className="HomePageP2">
        <Space direction="horizontal" style={{ display: "flex", justifyContent: "space-around" }}>
          <Card size="small" hoverable className="custom-card"
            cover={
              <div className="card-cover">
                <div className="card-semi-oval"></div>
                <img src={add6} alt="Ad 6" className="card-image" />
              </div>
            }>
            <Card.Meta title={<span>Insurance <ArrowRightOutlined/></span>} />
          </Card>

          <Card size="small" hoverable className="custom-card"
            cover={
              <div className="card-cover">
                <div className="card-semi-oval"></div>
                <img src={add7} alt="Ad 7" className="card-image" />
              </div>
            }>
            <Card.Meta title={<span>Investment <ArrowRightOutlined/></span>} />
          </Card>

          <Card size="small" hoverable className="custom-card"
            cover={
              <div className="card-cover">
                <div className="card-semi-oval"></div>
                <img src={add8} alt="Ad 8" className="card-image" />
              </div>
            }>
            <Card.Meta title={<span>Lend Money <ArrowRightOutlined/></span>} />
          </Card>
        </Space>
      </div>

      <div className="HomePageP3">
        <Card hoverable style={{ marginTop: 30, border: "1px solid black" }}
          cover={<img src={add9} alt="Ad 6" style={{ width: "100%" }} />}>
          <Meta title="How WallPay Works and What we Value" description="www.instagram.com" />
        </Card>
      </div>

      <div className="HomePageP4">
        <Card hoverable style={{ width: 620 }} styles={{ body: { padding: 0, overflow: "hidden" } }}>
          <Flex justify="space-between">
            <img
              alt="avatar"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              style={{ display: "block", width: 273 }}
            />
            <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
              <Typography.Title level={3}>
                “antd is an enterprise-class UI design language and React UI library.”
              </Typography.Title>
              <Button type="primary" onClick={() => setOpenSignup(true)}>
                Get Started
              </Button>
            </Flex>
          </Flex>
        </Card>
      </div>

      {/* Signup Drawer */}
      <SignupPage open={openSignup} onClose={() => setOpenSignup(false)} />
    </div>
  );
};

export default HomePage;
