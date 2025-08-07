import React, { useState } from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Address</h3>
                <p>123 Food Street<br />Culinary District<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>hello@cravenow.com<br />support@cravenow.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Hours</h3>
                <p>Monday - Friday: 8:00 AM - 10:00 PM<br />
                Saturday - Sunday: 9:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src={assets.facebook_icon} alt="Facebook" />
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link">
                <img src={assets.twitter_icon} alt="Twitter" />
                <span>Twitter</span>
              </a>
              <a href="#" className="social-link">
                <img src={assets.linkedin_icon} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send us a Message</h2>
            
            {submitSuccess && (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us how we can help you..."
                  rows="6"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <p>Interactive Map Coming Soon</p>
            <p>123 Food Street, Culinary District, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 