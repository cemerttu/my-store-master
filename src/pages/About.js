// About.js - Fixed with proper counters and layout
import React, { useState, useEffect } from "react";

const About = () => {
  const [counters, setCounters] = useState({ customers: 0, products: 0, years: 0 });
  
  useEffect(() => {
    const animateCounters = () => {
      let customerCount = 0;
      let productCount = 0;
      let yearCount = 0;
      
      const customerInterval = setInterval(() => {
        customerCount += 100;
        if (customerCount >= 10000) {
          customerCount = 10000;
          clearInterval(customerInterval);
        }
        setCounters(prev => ({ ...prev, customers: customerCount }));
      }, 10);

      const productInterval = setInterval(() => {
        productCount += 50;
        if (productCount >= 5000) {
          productCount = 5000;
          clearInterval(productInterval);
        }
        setCounters(prev => ({ ...prev, products: productCount }));
      }, 10);

      const yearInterval = setInterval(() => {
        yearCount += 0.1;
        if (yearCount >= 4) {
          yearCount = 4;
          clearInterval(yearInterval);
        }
        setCounters(prev => ({ ...prev, years: yearCount.toFixed(1) }));
      }, 50);
    };

    animateCounters();
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">About StyleHub</h1>
          <p className="lead mb-4">
            Welcome to <strong>StyleHub</strong> - where fashion meets passion! We're not just selling clothes; 
            we're helping you express your unique personality through style.
          </p>
          <p className="mb-4">
            Born in 2020 from a simple idea that everyone deserves to look and feel amazing, we've evolved 
            from a small startup into a global fashion destination serving fashion enthusiasts worldwide.
          </p>
          
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="counter-card p-3 rounded border">
                <h3 className="text-primary fw-bold">{counters.customers.toLocaleString()}+</h3>
                <p className="text-muted mb-0">Happy Customers</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="counter-card p-3 rounded border">
                <h3 className="text-primary fw-bold">{counters.products.toLocaleString()}+</h3>
                <p className="text-muted mb-0">Products</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="counter-card p-3 rounded border">
                <h3 className="text-primary fw-bold">{counters.years}+</h3>
                <p className="text-muted mb-0">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <a href="/contact" className="btn btn-primary btn-lg me-3">
              Join Our Style Community
            </a>
            <a href="/shop" className="btn btn-outline-primary btn-lg">
              Explore Collections
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-visual p-4 text-center">
            <img 
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=400&fit=crop" 
              alt="About StyleHub" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;