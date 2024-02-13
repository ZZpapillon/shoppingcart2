import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../Navbar.css'; // Import CSS file for styling
import videoSource from '../razervideo.mp4'

const Home = () => {
  return (
    <>
    
     <section className="video-background">
      <video autoPlay loop muted>
          <source src={videoSource} type="video/mp4" />
      </video>
     
      <Container className="content">
  {/* Add content on top of the video if needed */}
  <h1 className="text-center text-white display-1">Want to experience a new level?</h1>
  <h2 className="text-center text-white display-4">Fast</h2>
  <Button className="btn-shop-now" variant='outline-success' size='lg' style={{ fontSize: '3rem', color: 'white' }}>Shop now!</Button>
</Container>

    </section>

    
    
    
    </>
  );
};

export default Home;


