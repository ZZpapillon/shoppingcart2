import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShoppingCart = ({ onClose, cartItems }) => {
  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            {/* Add additional information as needed */}
          </div>
        ))}
        {/* Add your shopping cart content here */}
        <p>Items purchased will appear here</p>
      </Modal.Body>
      <Modal.Footer>
         <Button variant="success" onClick={onClose}>Proceed to Buy</Button>
        <Button variant="success" onClick={onClose}>Close</Button>
        {/* Add additional buttons or functionality as needed */}
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;

