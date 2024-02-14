import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
    e.target.reset();
  };

  return (
    <div className="contact-container" style={{ backgroundColor: 'black' }}>
      <Container fluid className="contact-content mt-5 ms-5">
        <Row>
          <Col lg={6}>
            <h1 style={{ color: 'green', fontSize: '3rem' }}>Contact Us</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label style={{ color: 'white' }}>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" placeholder="Enter your message" />
              </Form.Group>

              <Button className='mt-4' variant="success" type="submit">
                Submit
              </Button>
            </Form>
            <Toast show={showToast} onClose={() => setShowToast(false)} delay={5000} autohide>
              <Toast.Header>
                <strong className="me-auto">Success</strong>
              </Toast.Header>
              <Toast.Body>You successfully contacted Fake Razer!</Toast.Body>
            </Toast>
          </Col>
          <Col lg={6}>
            <img
              src="/razerContact.png"
              alt="Contact Us Image"
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px', marginTop: '20px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;







