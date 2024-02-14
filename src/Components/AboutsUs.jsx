import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css'; // Import CSS file for additional styling

const AboutUs = () => {
  return (
    <div className="full-height" style={{ backgroundColor: 'black' }}>
      <Container
        className="h-100"
        style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 6vh - 24px)' }} // Adjust the height dynamically
      >
        <Row className="h-100">
          {/* Left Column */}
          <Col md={8} className="d-flex align-items-start">
            <div className="text-container">
              <h1 className="text-green mb-5">Welcome to Razer Store</h1>
              <p className="text-white larger-text">
                At Razer, we're not just passionate about gaming; we're obsessed with it. From our cutting-edge hardware to our innovative software, everything we do is designed to take your gaming experience to the next level.
              </p>
              <p className="text-white larger-text">
                Our mission is simple: to create the best gaming gear on the planet. Whether you're a casual gamer or a hardcore pro, we've got everything you need to dominate the competition.
              </p>
              <p className="text-white larger-text">
                Join us and experience gaming like never before. Welcome to Razer Store – where the game is always on.
              </p>
              <p className="text-white larger-text">
                We believe in pushing the boundaries of what's possible. That's why we're constantly innovating and exploring new ways to enhance your gaming experience.
              </p>
              <p className="text-white larger-text">
                With Razer, you're not just buying a product – you're joining a community. We're here to support you every step of the way, whether you're a beginner or a seasoned pro.
              </p>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={4} className="d-flex align-items-center justify-content-center">
            <img
            
              src="/public/razerTeam.jpeg"
              alt="About Us Image"
              className="img-fluid larger-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;




