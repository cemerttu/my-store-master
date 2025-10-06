// Footer.js - Enhanced with better styling and functionality
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-crown fa-2x text-primary me-2"></i>
              <h5 className="fw-bold mb-0">StyleHub</h5>
            </div>
            <p className="text-white-50 mb-4">
              Your premier destination for fashion-forward clothing and accessories. 
              Elevate your style with our curated collections for every occasion.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white social-icon">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white social-icon">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white social-icon">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white social-icon">
                <i className="fab fa-pinterest fa-lg"></i>
              </a>
              <a href="#" className="text-white social-icon">
                <i className="fab fa-tiktok fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/shop?category=men" className="text-white-50 text-decoration-none footer-link">
                  Men's Collection
                </a>
              </li>
              <li className="mb-2">
                <a href="/shop?category=women" className="text-white-50 text-decoration-none footer-link">
                  Women's Collection
                </a>
              </li>
              <li className="mb-2">
                <a href="/shop?category=accessories" className="text-white-50 text-decoration-none footer-link">
                  Accessories
                </a>
              </li>
              <li className="mb-2">
                <a href="/shop?sort=newest" className="text-white-50 text-decoration-none footer-link">
                  New Arrivals
                </a>
              </li>
              <li className="mb-2">
                <a href="/shop?sort=featured" className="text-white-50 text-decoration-none footer-link">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/size-guide" className="text-white-50 text-decoration-none footer-link">
                  <i className="fas fa-ruler me-2"></i>
                  Size Guide
                </a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="text-white-50 text-decoration-none footer-link">
                  <i className="fas fa-shipping-fast me-2"></i>
                  Shipping Info
                </a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="text-white-50 text-decoration-none footer-link">
                  <i className="fas fa-exchange-alt me-2"></i>
                  Returns & Exchanges
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-white-50 text-decoration-none footer-link">
                  <i className="fas fa-question-circle me-2"></i>
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white-50 text-decoration-none footer-link">
                  <i className="fas fa-headset me-2"></i>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Stay Updated</h6>
            <p className="text-white-50 mb-3">
              Get 15% off your first order! Subscribe for fashion updates and exclusive offers.
            </p>
            
            {subscribed ? (
              <div className="alert alert-success mb-0" role="alert">
                <i className="fas fa-check-circle me-2"></i>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="input-group mb-2">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ border: 'none' }}
                  />
                  <button 
                    className="btn btn-primary" 
                    type="submit"
                    style={{ border: 'none' }}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                <small className="text-white-50">
                  We respect your privacy. Unsubscribe at any time.
                </small>
              </form>
            )}

            {/* Payment Methods */}
            <div className="mt-4">
              <h6 className="fw-bold mb-2">We Accept</h6>
              <div className="d-flex gap-2 flex-wrap">
                <i className="fab fa-cc-visa fa-2x text-white-50"></i>
                <i className="fab fa-cc-mastercard fa-2x text-white-50"></i>
                <i className="fab fa-cc-paypal fa-2x text-white-50"></i>
                <i className="fab fa-cc-apple-pay fa-2x text-white-50"></i>
                <i className="fab fa-cc-amazon-pay fa-2x text-white-50"></i>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50">
              &copy; 2024 StyleHub. All Rights Reserved. | 
              <a href="/privacy" className="text-white-50 text-decoration-none ms-2">Privacy Policy</a> | 
              <a href="/terms" className="text-white-50 text-decoration-none ms-2">Terms of Service</a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-white-50">
              Designed with <i className="fas fa-heart text-danger"></i> for fashion lovers worldwide
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          transition: all 0.3s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #fff !important;
          transform: translateX(5px);
          text-decoration: none !important;
        }
        .social-icon {
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-icon:hover {
          background: linear-gradient(45deg, #667eea, #764ba2);
          transform: translateY(-2px);
        }
        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
          border-color: #667eea;
        }
      `}</style>
    </footer>
  );
};

export default Footer;