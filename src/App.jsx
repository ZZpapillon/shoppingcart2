import React, { useState , useEffect} from 'react';
import { Navbar, Nav, Container, Button, Toast } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom'; // Import NavLink from 'react-router-dom'
import './Navbar.css'; // Import CSS file for styling
import ShoppingCart from './Cart';
import CustomCard from './Components/Cards';
import CardPlacer from './Components/CardPlacer';
import Shop from './Components/Shop';
import CartContext from './CartContext'


function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
  setCartItems([]);
};

  const handleAddToCart = (item, quantity = 1) => {
    // Add the item to the cartItems array with the specified quantity
    const newItem = { ...item, quantity };
    setCartItems([...cartItems, newItem]);
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
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <NavLink to="" style={{ color: 'white', fontSize: '1.5em' }}>Razer</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <NavLink to="/shop" className="nav-link">Shop</NavLink>
              <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
              <Button variant="link" className="nav-link" onClick={handleShoppingCartClick}>Shopping Cart</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet  />

      <footer className="footer py-0">
        <Container>
          <p className="text-center text-white">@ZdeslavZaksek</p>
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

