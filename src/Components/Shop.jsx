import React, { useContext } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './shop.css'
import CustomCard from './Cards';
import CardPlacer from './CardPlacer';
import CartContext from '../CartContext';
const Shop = () => {
    const { onAddToCart } = useContext(CartContext);

   const handleAddToCart = (item) => {
    onAddToCart(item);; // Add the item to the cartItems array
  };

    
  return (
<div className="full-width-container" >
      <Container fluid>
        <Row className="align-items-center ms-4" style={{ height: '25%' }}>
          <Col>
            <h2 className='mt-5'style={{ color: 'green', fontSize: '2.5em', fontWeight: 'bold' }}>THE LATEST AND GREATEST GAMING GEAR</h2>
            <p  style={{ color: 'gray', fontSize: '1em', fontWeight: 'bold' }}>Razer mice, keyboards, headsets, laptops & more</p>
            <h4 className='mt-5' style={{ color: 'white', fontSize: '1.8em', fontWeight: 'bold' }}>FRESH OFF THE LINE</h4>
            <p style={{ color: 'gray', fontSize: '1em', fontWeight: 'bold' }}>Check out our latest releases to secure the most up-to-date upgrades for your setup</p>
          </Col>
          <Col>
          <Col style={{ position: 'relative' }}>
  <img
    src="../public/razerlogo.gif"
    alt="Rotating GIF"
    style={{
      width: '30em', // Adjust the width to make it smaller
      animation: 'rotation 8s infinite linear', // Increase the duration to slow down the rotation
      position: 'absolute', // Set position to absolute
      top: '-220px', // Adjust the top position to move it down from the top
      right: '25px', // Adjust the right position to move it from the right
    }}
  />
</Col>

          
          </Col>
        </Row>
        
        <Row className="align-items-center mt-5" style={{ height: '90%' }}>
           
      <CardPlacer onAddToCart={handleAddToCart}/>

    
        </Row>
        
        
        
        <Row className="align-items-center" style={{ height: '40%', backgroundColor: 'black' }}>
          <Col>
            {/* Add your content for the third row here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;