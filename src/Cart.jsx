import React, { useState, useEffect } from 'react';
import { Modal, Button, } from 'react-bootstrap';

const ShoppingCart = ({ onClose, cartItems, onDeleteItem, onClearCart, onShowToast }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [cartNotEmpty, setCartNotEmpty] = useState(false); // State to track if cart is not empty
  const [purchaseMade, setPurchaseMade] = useState(false);
  

  useEffect(() => {
    setItems([...cartItems]);
  }, [cartItems]);

  useEffect(() => {
    updateTotalPrice(items);
    setCartNotEmpty(items.length > 0); // Update cartNotEmpty state based on cart items
  }, [items]);

  const handlePurchase = () => {
    setItems([]);
    onClearCart();
    onShowToast(); // Trigger the display of the alert
    onClose();
  };


  const handleIncrement = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity++;
    setItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity--;
      setItems(updatedItems);
    }
  };

  const handleDelete = (index) => {
    onDeleteItem(index);
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const updateTotalPrice = (updatedItems) => {
    const newTotalPrice = updatedItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(',', '')); // Convert price string to number
      return total + itemPrice * item.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  };

 const handleShowAlert = () => {
  console.log('Setting showAlert to true...');
  setShowAlert(true);
};



  return (
    <>
      <Modal show={true} onHide={purchaseMade ? onClose : null} centered backdrop="static">
        <Modal.Header style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
          <Modal.Title>New Products Coming In</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black', color: 'white', maxHeight: '70vh', overflowY: 'auto', scrollbarColor: 'rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1)' }}>
          {items.map((item, index) => (
            <div key={index} style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.imgSrc} alt="Product" style={{ width: '100px', marginRight: '20px' }} />
                <div>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>Price: {item.price}</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button style={{ padding: '0.1rem 0.4rem', fontSize: '0.6rem' }} variant="light" onClick={() => handleDecrement(index)}>-</Button>
                    <span style={{ margin: '0 5px', fontSize: '1.1rem' }}>{item.quantity}</span>
                    <Button style={{ padding: '0.1rem 0.4rem', fontSize: '0.6rem' }} variant="light" onClick={() => handleIncrement(index)}>+</Button>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <Button size="sm" variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div>
              <p>Nothing in cart yet!</p>
              <p>Items purchased will appear here.</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black', borderTop: 'white 1px solid', color: 'white' }}>
          <h5 style={{ marginLeft: '1rem' }}>Total Price: €{totalPrice.toFixed(2)}</h5>
          <div>
            <Button disabled={!cartNotEmpty} variant="success" onClick={handlePurchase}>Proceed to Buy</Button>
            <Button variant="dark" onClick={onClose} style={{ marginLeft: '0.5rem' }}>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default ShoppingCart;
