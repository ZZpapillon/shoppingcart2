import React, { useState , useEffect} from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
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

  
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]); // Add the item to the cartItems array
  };
  const handleShoppingCartClick = () => {
    setShowShoppingCart(true);
  };

  const handleCloseShoppingCart = () => {
    setShowShoppingCart(false);
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
      {showShoppingCart && <ShoppingCart cartItems={cartItems}  onClose={handleCloseShoppingCart} />}
     

     
    </CartContext.Provider>

  );
}

export default App;

