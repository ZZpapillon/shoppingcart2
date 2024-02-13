import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomCard from './Cards'; // Assuming the CustomCard component is in a separate file
import './shop.css'

const CardPlacer = ({ onAddToCart }) => {
  const containerRef = useRef(null);
  
  const handleAddToCartClick = (item) => {
    // Call the onAddToCart callback function with the item details
    onAddToCart(item);
  };
   

  const handleScroll = (scrollOffset) => {
  const container = containerRef.current;
  if (container) {
    container.scrollLeft += scrollOffset;
  }
};


  // Example card data
  const cardData = [
    { title: 'New Razer Blade 14', description: 'Ultra-powerful, ultra-portable 14-inch gaming laptop with AMD Ryzen™ 9 8945HS processor and NVIDIA® GeForce RTX™ 40 Series graphics', price: '2,499.99', imgSrc: '../public/jedan.png' },
    { title: 'New Razer Blade 16', description: 'High-Performance 16” Gaming Laptop with 240 Hz OLED display', price: '3,499.99', imgSrc: '../public/dva.png' },
    { title: 'Razer Basilisk V3 Pro - Black', description: 'Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel', price: '3,499.99', imgSrc: '../public/tri.png' },
    { title: 'Razer BlackWidow V4 75%', description: 'Hot-swappable Mechanical Gaming Keyboard', price: '219.99', imgSrc: '../public/cetiri.png' },
    { title: 'Product 1', description: 'Description 1', price: '$19.99', imgSrc: '../public/jedan.png' },
    { title: 'Product 2', description: 'Description 2', price: '$29.99', imgSrc: '../public/dva.png' },
    { title: 'Product 3', description: 'Description 3', price: '$39.99', imgSrc: '../public/tri.png' },
    { title: 'Product 4', description: 'Description 4', price: '$49.99', imgSrc: '../public/cetiri.png' },
    { title: 'Product 3', description: 'Description 3', price: '$39.99', imgSrc: '../public/tri.png' },
    { title: 'Product 4', description: 'Description 4', price: '$49.99', imgSrc: '../public/cetiri.png' },
    // Add more card data here as needed
  ];

  return (
    
      <>
  <div className="position-relative">
    <div ref={containerRef} className="overflow-x-hidden overflow-y-hidden overflow-x-auto ms-5" style={{ maxHeight: '100%', maxWidth:'92%', paddingRight: '15px' }}>
      <div className="d-flex flex-row">
        {cardData.map((card, index) => (
          <Col key={index} className="p-0 m-3">
            <CustomCard
              title={card.title}
              description={card.description}
              price={card.price}
              imgSrc={card.imgSrc}
              onAddToCart={handleAddToCartClick} // Pass the addToCartHandler function as a prop
            />
          </Col>
        ))}
      </div>
    </div>
 
<Button onClick={() => handleScroll(-200)} className="position-absolute top-50 start-0 translate-middle-y arrow-button"
  style={{ color: 'green', fontSize: '5em', backgroundColor: 'transparent', border: 'none' }}
>
  {'<'}
</Button>
<Button onClick={() => handleScroll(200)} className="position-absolute top-50 end-0 translate-middle-y arrow-button"
  style={{ color: 'green', fontSize: '5em', backgroundColor: 'transparent', border: 'none' }}
>
  {'>'}
</Button>


  </div>
</>

  );
};

export default CardPlacer;

