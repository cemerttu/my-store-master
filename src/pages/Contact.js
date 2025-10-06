// Contact.js - Fixed send message button
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <div className="success-animation mb-4">
              <i className="fas fa-check-circle fa-5x text-success"></i>
            </div>
            <h2 className="mb-3">Message Sent Successfully!</h2>
            <p className="lead mb-4">
              Thank you for reaching out! Our style experts will get back to you within 24 hours.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="/" className="btn btn-primary">Back to Home</a>
              <a href="/shop" className="btn btn-outline-primary">Continue Shopping</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Get In Touch</h1>
            <p className="lead">Have questions about style? Need fashion advice? We're here to help!</p>
          </div>
          
          <div className="row mb-5">
            <div className="col-md-4 text-center mb-4">
              <div className="contact-card p-4 rounded shadow-sm">
                <div className="contact-icon mb-3">
                  <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <h5>Visit Our Store</h5>
                <p className="text-muted mb-0">123 Fashion Avenue<br />Style District, NY 10001</p>
                <small className="text-primary">Mon-Sat: 10AM-8PM</small>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="contact-card p-4 rounded shadow-sm">
                <div className="contact-icon mb-3">
                  <i className="fas fa-phone fa-2x text-success"></i>
                </div>
                <h5>Call Us</h5>
                <p className="text-muted mb-0">+1 (555) 123-STYLE<br />+1 (555) 123-FASHION</p>
                <small className="text-success">24/7 Customer Support</small>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="contact-card p-4 rounded shadow-sm">
                <div className="contact-icon mb-3">
                  <i className="fas fa-envelope fa-2x text-warning"></i>
                </div>
                <h5>Email Us</h5>
                <p className="text-muted mb-0">style@stylehub.com<br />support@stylehub.com</p>
                <small className="text-warning">Response within 2 hours</small>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h4 className="mb-0">Send Us a Message</h4>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email *</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number" 
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Subject</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What's this regarding?" 
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Message *</label>
                        <textarea 
                          className="form-control" 
                          rows="5" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your style needs..." 
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg px-4"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane me-2"></i>
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;