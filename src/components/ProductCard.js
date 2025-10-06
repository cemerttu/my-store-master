// ProductCard.js - Fixed (corrected the component name and structure)
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    rating,
    reviews,
    isNew,
    isHot
  } = product;

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="card product-card h-100 border-0 shadow-sm">
      <div className="position-relative">
        <img 
          src={image} 
          className="card-img-top" 
          alt={name}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        
        {/* Badges */}
        <div className="position-absolute top-0 start-0 m-2">
          {isNew && <span className="badge bg-primary">New</span>}
          {isHot && <span className="badge bg-danger ms-1">Hot</span>}
          {discount > 0 && <span className="badge bg-success ms-1">-{discount}%</span>}
        </div>

        {/* Quick Actions */}
        <div className="position-absolute top-0 end-0 m-2">
          <button className="btn btn-light btn-sm rounded-circle">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <span className="text-muted small mb-1">{category}</span>
        <h6 className="card-title fw-bold mb-2">{name}</h6>
        
        {/* Rating */}
        <div className="d-flex align-items-center mb-2">
          <div className="text-warning small">
            {'★'.repeat(Math.floor(rating))}
            {'☆'.repeat(5 - Math.floor(rating))}
          </div>
          <span className="text-muted small ms-2">({reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="fw-bold text-primary fs-5">${price}</span>
              {originalPrice && (
                <span className="text-muted text-decoration-line-through ms-2 small">
                  ${originalPrice}
                </span>
              )}
            </div>
            <Link 
              to={`/product/${id}`} 
              className="btn btn-primary btn-sm"
            >
              <i className="fas fa-shopping-cart me-1"></i>
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .btn-light {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;