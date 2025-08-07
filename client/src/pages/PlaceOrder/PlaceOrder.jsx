import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PlaceOrder.css";
import { useCart } from "../../context/CartContext";

const PlaceOrder = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    deliveryInstructions: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTax = () => {
    return getCartTotal() * 0.08; // 8% tax
  };

  const calculateDeliveryFee = () => {
    return 3.99; // Fixed delivery fee
  };

  const calculateTotal = () => {
    return getCartTotal() + calculateTax() + calculateDeliveryFee();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart(); // Clear the cart after successful order
      navigate('/order-success'); // Redirect to success page
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="place-order-container">
        <div className="empty-order">
          <h2>Your cart is empty</h2>
          <p>Please add some items to your cart before placing an order.</p>
          <Link to="/menu" className="continue-shopping-btn">
            Explore Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="place-order-container">
      <div className="order-header">
        <h1>Place Your Order</h1>
        <p>Complete your order details and we'll deliver delicious food to your doorstep</p>
      </div>

      <div className="order-content">
        <div className="order-form-section">
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={orderData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={orderData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={orderData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-section">
              <h2>Delivery Address</h2>
              <div className="form-group">
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={orderData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your street address"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={orderData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your city"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={orderData.zipCode}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="deliveryInstructions">Delivery Instructions (Optional)</label>
                <textarea
                  id="deliveryInstructions"
                  name="deliveryInstructions"
                  value={orderData.deliveryInstructions}
                  onChange={handleInputChange}
                  placeholder="Any special delivery instructions..."
                  rows="3"
                />
              </div>
            </div>

            <div className="form-section">
              <h2>Payment Method</h2>
              <div className="payment-options">
                <div className="payment-option cod-only">
                  <span className="payment-label">Cash on Delivery (COD)</span>
                  <span className="payment-description">Pay when you receive your order</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <Link to="/cart" className="back-to-cart-btn">Back to Cart</Link>
              <button type="submit" className="place-order-btn" disabled={isSubmitting}>
                {isSubmitting ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {items.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Tax (8%)</span>
              <span>${calculateTax().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Delivery Fee</span>
              <span>${calculateDeliveryFee().toFixed(2)}</span>
            </div>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="delivery-info">
            <h3>Estimated Delivery</h3>
            <p>30-45 minutes</p>
            <div className="payment-info">
              <p>💳 Payment: Cash on Delivery</p>
              <p>💰 Pay: ${calculateTotal().toFixed(2)} on delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
