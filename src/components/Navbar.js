// Navbar.js - Updated with correct icons for Log In and Sign In
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCartCount(3);

    // Apply dark mode class to body
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // Implement actual search logic here
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        showNavbar ? "navbar-show" : "navbar-hide"
      } ${isScrolled ? "navbar-scrolled" : ""}`}
      style={{
        height: '60px',
        minHeight: '60px',
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div className="container" style={{ height: '100%' }}>
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
          style={{ 
            fontSize: '1.5rem',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <i className="fas fa-crown me-2 text-primary"></i>
          <span style={{ 
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>
            StyleHub
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ border: 'none', padding: '4px 8px' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" style={{ height: '100%' }}>
          <ul className="navbar-nav me-auto" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                style={{ 
                  padding: '8px 16px',
                  fontWeight: '500',
                  color: isActive("/") ? '#667eea' : '#333',
                  borderBottom: isActive("/") ? '2px solid #667eea' : 'none'
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/shop") ? "active" : ""}`}
                to="/shop"
                style={{ 
                  padding: '8px 16px',
                  fontWeight: '500',
                  color: isActive("/shop") ? '#667eea' : '#333',
                  borderBottom: isActive("/shop") ? '2px solid #667eea' : 'none'
                }}
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                to="/about"
                style={{ 
                  padding: '8px 16px',
                  fontWeight: '500',
                  color: isActive("/about") ? '#667eea' : '#333',
                  borderBottom: isActive("/about") ? '2px solid #667eea' : 'none'
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                to="/contact"
                style={{ 
                  padding: '8px 16px',
                  fontWeight: '500',
                  color: isActive("/contact") ? '#667eea' : '#333',
                  borderBottom: isActive("/contact") ? '2px solid #667eea' : 'none'
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3" onSubmit={handleSearch} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <div className="input-group" style={{ width: "200px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  height: '36px',
                  fontSize: '0.9rem',
                  border: '1px solid #e0e0e0'
                }}
              />
              <button 
                className="btn btn-outline-primary" 
                type="submit"
                style={{ height: '36px', padding: '0 12px' }}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>

          <ul className="navbar-nav" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            {/* Dark Mode Toggle */}
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                style={{ 
                  color: '#666',
                  padding: '8px',
                  margin: '0 4px'
                }}
              >
                <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
              </button>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <Link 
                className="nav-link position-relative" 
                to="/cart"
                style={{ 
                  color: '#333',
                  padding: '8px 12px',
                  margin: '0 4px',
                  fontWeight: '500'
                }}
              >
                <i className="fas fa-shopping-bag me-1"></i>
                Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

            {/* Account Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ 
                  color: '#333',
                  padding: '8px 12px',
                  margin: '0 4px',
                  fontWeight: '500'
                }}
              >
                <i className="fas fa-user me-1"></i>
                Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/login">
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">
                    <i className="fas fa-user-plus me-2"></i>
                    Sign In
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="fas fa-user-circle me-2"></i>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/orders">
                    <i className="fas fa-shopping-bag me-2"></i>
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/wishlist">
                    <i className="fas fa-heart me-2"></i>
                    Wishlist
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar-show {
          transform: translateY(0);
        }
        .navbar-hide {
          transform: translateY(-100%);
        }
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(20px);
        }
        .nav-link:hover {
          color: #667eea !important;
        }
        .dropdown-menu {
          border: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-radius: 12px;
          padding: 8px 0;
        }
        .dropdown-item {
          padding: 8px 16px;
          font-weight: 500;
          color: #333;
          transition: all 0.2s ease;
        }
        .dropdown-item:hover {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;