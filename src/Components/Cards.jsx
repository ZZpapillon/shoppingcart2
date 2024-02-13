import React from 'react';
import { Card, Button,  } from 'react-bootstrap';

const CustomCard = ({ title, description, price, imgSrc,onAddToCart }) => {
  
    const handleAddToCart = () => {
    // Call the onAddToCart callback function with the item details
    onAddToCart({ title, description, price, imgSrc });
  };
  
    return (
    
            <Card style={{ width: '18rem', height: '32.1rem', backgroundColor: '#141414' }}>
        <Card.Img style={{ width: '18rem', height: '17rem' }} variant="top" src={imgSrc} />
        <Card.Body className='d-flex flex-column align-items-center' style={{ backgroundColor: '#222222' }}>
          <div className='text-center'>
            <Card.Title style={{ color: 'white' }}>{title}</Card.Title>
            <Card.Text style={{ color: 'gray' }}>{description}</Card.Text>
          </div>
          <div className='mt-auto d-flex justify-content-between align-items-center w-100'>
            <p className='mt-3' style={{ color: 'white' }}>Price: €{price}</p>
            <Button onClick={handleAddToCart} variant="success" style={{ color: 'black' }}>Buy</Button>
          </div>
        </Card.Body>
      </Card>

   
  );
};

export default CustomCard;