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
   

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const itemWidth = container.querySelector('.card').offsetWidth;
      const itemMargin = parseInt(window.getComputedStyle(container.querySelector('.card')).marginRight);
      const totalWidth = itemWidth + (itemWidth / 8);
      const scrollAmount = direction === 'prev' ? -totalWidth : totalWidth;
      const currentScrollLeft = container.scrollLeft;
      container.scrollTo({
        left: currentScrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  // Example card data
  const cardData = [
    { title: 'New Razer Blade 14', description: 'Ultra-powerful, ultra-portable 14-inch gaming laptop with AMD Ryzen™ 9 8945HS processor and NVIDIA® GeForce RTX™ 40 Series graphics', price: '2,499.99', imgSrc: '../public/jedan.png' },
    { title: 'New Razer Blade 16', description: 'High-Performance 16” Gaming Laptop with 240 Hz OLED display', price: '3,499.99', imgSrc: '../public/dva.png' },
    { title: 'Razer Basilisk V3 Pro - Black', description: 'Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel', price: '179.99', imgSrc: '../public/tri.png' },
    { title: 'Razer BlackWidow V4 75%', description: 'Hot-swappable Mechanical Gaming Keyboard', price: '219.99', imgSrc: '../public/cetiri.png' },
    { title: 'Razer USB-C Dock', description: '11-Port USB-C Dock', price: '139.99', imgSrc: '../public/pet.png' },
    { title: 'Razer Iskur V2 - Dark Gray Fabric', description: 'Gaming Chair with Adaptive Lumbar Support', price: '699.99', imgSrc: '../public/sest.png' },
    { title: 'Razer Kraken V3 Pro', description: 'Wireless Gaming Headset with Haptic Technology', price: '239.99', imgSrc: '../public/sedam.png' },
    { title: 'Razersuperfuture Matte Black Glasses', description: 'Photochromic Glasses with Blue Light Protection', price: '249.00', imgSrc: '../public/osam.png' },
    { title: 'Razer Naga Left-Handed Edition', description: 'Ergonomic MMO Gaming Mouse for Left-Handed Users', price: '109.99', imgSrc: '../public/devet.png' },
    { title: 'Razer Blade 17 - QHD 240Hz - GeForce RTX 3060 - Black', description: 'Desktop Replacement Laptop with 12th Gen Processors', price: '3,799.99', imgSrc: '../public/deset.png' },
     { title: 'Razer x *A Bathing Ape® Opus', description: 'Wireless THX® Certified Headphones with Advanced Active Noise Cancellation', price: '299.99', imgSrc: '../public/jedanest.png' },
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
 
<Button onClick={() => handleScroll('prev')} className="position-absolute top-50 start-0 translate-middle-y arrow-button"
  style={{ color: 'green', fontSize: '5em', backgroundColor: 'transparent', border: 'none' }}
>
  {'<'}
</Button>
<Button onClick={() => handleScroll('next')} className="position-absolute top-50 end-0 translate-middle-y arrow-button"
  style={{ color: 'green', fontSize: '5em', backgroundColor: 'transparent', border: 'none' }}
>
  {'>'}
</Button>


  </div>
</>

  );
};

export default CardPlacer;

