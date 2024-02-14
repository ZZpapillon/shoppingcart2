import React, { useState , useEffect} from 'react';
import { Navbar, Nav, Row, Col, Container, Button, Toast } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom'; // Import NavLink from 'react-router-dom'
import './Navbar.css'; // Import CSS file for styling
import ShoppingCart from './Cart';
import CustomCard from './Components/Cards';
import CardPlacer from './Components/CardPlacer';
import Shop from './Components/Shop';
import CartContext from './CartContext'
import { CartFill, ExclamationCircleFill } from 'react-bootstrap-icons';




function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [shakeCart, setShakeCart] = useState(false);

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
  setCartItems([]);
};
const handleAddToCart = (item) => {
  const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.title === item.title);
  if (existingItemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].quantity++;
    setCartItems(updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }
  setShakeCart(true);
    setTimeout(() => setShakeCart(false), 1000);
};



  const handleShoppingCartClick = () => {
    setShowShoppingCart(true);
  };

  const handleCloseShoppingCart = () => {
    setShowShoppingCart(false);
  };

   const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCleartoast = () => {
    setShowToast(false);
  };

  
  // Return null to ensure no visible rendering
 

  return (
    <CartContext.Provider value={{ onAddToCart: handleAddToCart }}>
  <Navbar expand="lg" className="custom-navbar green-border fixed-top">
  <Container fluid className="kontenjer">
    <Row className="w-100">
      <Col xs={6} md={4}>
        <div className="navbar-brand">
          <NavLink to="">
            <img src="/public/razerHeader.jpeg" alt="Razer" className="logo-img" />
          </NavLink>
        </div>
      </Col>
      <Col xs={6} md={8} className="text-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="collapsed-button" />

        <Navbar.Collapse id="basic-navbar-nav" className="navM justify-content-end">
          <Nav>
            <NavLink to="/shop" className="nav-link">Shop</NavLink>
            <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>
          <Button variant="link" onClick={handleShoppingCartClick}>
            <CartFill className={`green-cart ${shakeCart ? 'shake' : ''}`} size={22} />
              {cartItems.length > 0 && <ExclamationCircleFill className="cart-notification" style={{ fontSize: '20px', color: 'red', marginBottom: '1.5vh' }} />}          
          </Button>
        </Navbar.Collapse>
      </Col>
    </Row>
  </Container>
</Navbar>









      <Outlet  />

      <footer className="footer pt-1">
        <Container>
          <h5 className="text-center text-white">@ZdeslavZaksek</h5>
        </Container>
      </footer>

      {/* Render the shopping cart modal only when showShoppingCart state is true */}
      {showShoppingCart && (
        <ShoppingCart
          cartItems={cartItems}
          onDeleteItem={handleDeleteItem}
          onClose={handleCloseShoppingCart}
          onClearCart={handleClearCart}
          onShowToast={handleShowToast}
        />
      )}

       <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={6000} // Autohide after 4 seconds
        autohide
        style={{
          position: 'fixed',
          top: '12vh',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '9999',
          backgroundColor: 'white',
          border: '2px solid green',
          fontSize: '1rem', // Set the font size to 1.2rem
          display: 'inline-block',
           width: 'auto',
        }}
      >
        <Toast.Body style={{ color: 'green', whiteSpace: 'nowrap'  }}>
          Congratulations on your purchase! Your order has been successfully processed and your cart has been cleared.
        </Toast.Body>
      </Toast>

     

     
    </CartContext.Provider>

  );
}

export default App;

