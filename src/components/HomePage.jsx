import React from "react";
import { Carousel, Card, Space, Button, Flex, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
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

const HomePage = ({ openLoginModal, openSignupDrawer }) => {
  return (
    <div>
      {/* Carousel Section */}
      <div className="HomePageP1">
        <Carousel autoplay>
          {[add1, add2, add3, add4, add5].map((img, index) => (
            <div key={index} className="HomePageCarousel">
              <img src={img} alt={`Ad ${index + 1}`} style={{ width: "100%" }} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Feature Cards Section */}
      <div className="HomePageP2">
        <Space
          direction="horizontal"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Card
            size="small"
            hoverable
            className="custom-card"
            onClick={openLoginModal}
            cover={
              <div className="card-cover">
                <div className="card-semi-oval"></div>
                <img src={add6} alt="Ad 6" className="card-image" />
              </div>
            }
          >
            <Meta title={<span>Insurance <ArrowRightOutlined /></span>} />
          </Card>

          <Card
            size="small"
            hoverable
            className="custom-card"
            onClick={openLoginModal}
            cover={
              <div className="card-cover">
                <div className="card-semi-oval"></div>
                <img src={add7} alt="Ad 7" className="card-image" />
              </div>
            }
          >
            <Meta title={<span>Investment <ArrowRightOutlined /></span>} />
          </Card>

          <Card
            size="small"
            hoverable
            className="custom-card"
            onClick={openLoginModal}
            cover={
              <div className="card-cover">
                <div className="card-semi-oval"></div>
                <img src={add8} alt="Ad 8" className="card-image" />
              </div>
            }
          >
            <Meta title={<span>Lend Money <ArrowRightOutlined /></span>} />
          </Card>
        </Space>
      </div>

      {/* Informative Banner Section */}
      <div className="HomePageP3">
        <Card
          hoverable
          style={{ marginTop: 30, border: "1px solid black" }}
          cover={<img src={add9} alt="Ad 9" style={{ width: "100%" }} />}
        >
          <Meta
            title="How WallPay Works and What we Value"
            description="www.instagram.com"
          />
        </Card>
      </div>

      {/* CTA Section */}
      <div className="HomePageP4" style={{ marginTop: 30 }}>
        <Card hoverable style={{ width: 620 }} bodyStyle={{ padding: 0, overflow: "hidden" }}>
          <Flex justify="space-between">
            <img
              alt="avatar"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              style={{ display: "block", width: 273 }}
            />
            <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
              <Typography.Title level={3}>
                ““WallPay empowers you to send, spend, and secure money instantly — all in one seamless platform.”
                ”
              </Typography.Title>
              <Button type="primary" onClick={openSignupDrawer}>
                Get Started
              </Button>
            </Flex>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
