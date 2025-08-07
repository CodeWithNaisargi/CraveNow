import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import addIcon from "../../assets/add_icon_green.png";
import removeIcon from "../../assets/remove_icon_red.png";
import crossIcon from "../../assets/cross_icon.png";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const calculateTax = () => {
    return getCartTotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return getCartTotal() + calculateTax();
  };

  const handleCheckout = () => {
    navigate('/place-order');
  };

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any delicious food to your cart yet!</p>
          <Link to="/menu" className="continue-shopping-btn">
            Explore Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-price">${item.price.toFixed(2)}</div>
              </div>

              <div className="item-quantity">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="quantity-btn"
                >
                  <img src={removeIcon} alt="Remove" />
                </button>
                <span className="quantity-number">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  <img src={addIcon} alt="Add" />
                </button>
              </div>

              <div className="item-total">
                <span className="total-amount">${(item.price * item.quantity).toFixed(2)}</span>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-item-btn"
              >
                <img src={crossIcon} alt="Remove" />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-item">
            <span>Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>

          <div className="summary-item">
            <span>Tax (8%)</span>
            <span>${calculateTax().toFixed(2)}</span>
          </div>

          <div className="summary-item total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>

          <Link to="/menu" className="continue-shopping-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
