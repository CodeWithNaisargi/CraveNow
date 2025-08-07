import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";
import parcelIcon from "../../assets/parcel_icon.png";

const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <div className="success-card">
        <div className="success-icon">
          <img src={parcelIcon} alt="Order Success" />
        </div>
        
        <div className="success-content">
          <h1>🎉 Order Placed Successfully!</h1>
          <p className="success-message">
            Thank you for your order! We're preparing your delicious food and it will be delivered to your doorstep soon.
          </p>
          
          <div className="order-details">
            <div className="detail-item">
              <span className="detail-label">Order Status:</span>
              <span className="detail-value">Confirmed</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Estimated Delivery:</span>
              <span className="detail-value">30-45 minutes</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Payment Method:</span>
              <span className="detail-value">Cash on Delivery</span>
            </div>
          </div>
          
          <div className="delivery-info">
            <h3>📞 What's Next?</h3>
            <ul>
              <li>Our kitchen is preparing your order</li>
              <li>You'll receive a call from our delivery partner</li>
              <li>Pay with cash when your order arrives</li>
              <li>Enjoy your delicious meal!</li>
            </ul>
          </div>
          
          <div className="success-actions">
            <Link to="/menu" className="order-again-btn">
              Order Again
            </Link>
            <Link to="/" className="home-btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess; 