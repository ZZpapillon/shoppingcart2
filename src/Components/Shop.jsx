import React, { useContext, useState } from 'react';
import '../Navbar.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './shop.css'
import CustomCard from './Cards';
import CardPlacer from './CardPlacer';
import CartContext from '../CartContext';
import CircleIndicator from '../CircleIndicator';
import QuoteOverlay from './Quote';
const Shop = () => {
    const { onAddToCart } = useContext(CartContext);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/public/imageBack.webp', '/public/background2.webp', '/public/background3.webp', '/public/background4.webp'];

   const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }; 
  
  const handleAddToCart = (item) => {
    onAddToCart(item);; // Add the item to the cartItems array
  };

    
  return (
<div className="full-width-container">
  <Container fluid className='shop'>
    <Row className="align-items-center ms-4" style={{ minHeight: '25vh' }}>
      <Col>
        <h2 className='mt-5' style={{ color: 'green', fontSize: '2.5em', fontWeight: 'bold' }}>THE LATEST AND GREATEST GAMING GEAR</h2>
        <p style={{ color: 'gray', fontSize: '1em', fontWeight: 'bold' }}>Razer mice, keyboards, headsets, laptops & more</p>
        <h4 className='mt-5 ms-3' style={{ color: 'white', fontSize: '1.8em', fontWeight: 'bold' }}>FRESH OFF THE LINE</h4>
        <p className='ms-3' style={{ color: 'gray', fontSize: '1em', fontWeight: 'bold' }}>Check out our latest releases to secure the most up-to-date upgrades for your setup</p>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <img
          src="/public/razerlogo.gif"
          alt="Rotating GIF"
          style={{
            width: '60%', // Adjust the width to make it smaller
            animation: 'rotation 8s infinite linear', // Increase the duration to slow down the rotation
          }}
        />
      </Col>
    </Row>

    <Row className="align-items-center mt-5 card-placer">
      <CardPlacer onAddToCart={handleAddToCart}/>
    </Row>
<Row className="align-items-center" style={{ backgroundColor: 'black' }}>
          <Col className="ms-3">
            <div className="image-slider-container position-relative m-5">
              <img src={images[currentImageIndex]} alt="Image Placeholder" className="img-fluid" />

              {/* Navigation Buttons */}
              <Button onClick={goToPreviousImage} className="position-absolute top-50 start-0 translate-middle-y strijele">
                {'<'}
              </Button>
              <Button onClick={goToNextImage} className="position-absolute top-50 end-0 translate-middle-y strijele">
                {'>'}
              </Button>
             
              <CircleIndicator totalSlides={images.length} currentSlide={currentImageIndex} />
             <QuoteOverlay isBlack={currentImageIndex === 0} />
            </div>
          </Col>
        </Row>

  </Container>
</div>

  );
};

export default Shop;