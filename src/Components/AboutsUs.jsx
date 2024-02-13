import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to Razer Store! We are passionate about delivering top-quality gaming products to our customers.
            Our mission is to provide gamers with the best-in-class gaming gear, from keyboards and mice to headsets
            and laptops.
          </p>
          <p>
            At Razer, we believe that gaming is more than just a hobby – it's a lifestyle. That's why we strive to
            create innovative products that enhance the gaming experience and help players achieve their full
            potential.
          </p>
          <p>
            Our team is dedicated to excellence, and we're committed to providing exceptional customer service and
            support. Whether you're a casual gamer or a professional esports athlete, we've got everything you need
            to take your gaming to the next level.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://via.placeholder.com/400"
            alt="About Us Image"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
