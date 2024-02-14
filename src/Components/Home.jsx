import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../Navbar.css'; // Import CSS file for styling
import videoSource from '../razervideo.mp4'
import { NavLink,} from 'react-router-dom';

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
  <h2 className="text-center text-white display-4">Fast, Efficient, and Reliable</h2>
  <NavLink to='/shop'><Button className="btn-shop-now" variant='outline-success' size='lg' style={{ fontSize: '3rem', color: 'white' }}>Shop now!</Button></NavLink>
</Container>

    </section>

    
    
    
    </>
  );
};

export default Home;


