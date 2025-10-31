import React from "react";
import { useParams, Link } from "react-router-dom";

const data = {
  1: {
    name: "Men's Casual Shirt",
    price: 1200,
    desc: "Stylish and comfortable casual shirt perfect for any occasion. Made with premium cotton fabric.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    features: [
      "Premium Cotton",
      "Comfortable Fit",
      "Easy Care",
      "Versatile Style",
    ],
    category: "Men's Fashion",
    rating: 4.5,
  },
  2: {
    name: "Women's Summer Dress",
    price: 2000,
    desc: "Beautiful summer dress with a flattering silhouette. Perfect for warm days and special occasions.",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    features: [
      "Breathable Fabric",
      "Flattering Cut",
      "Summer Style",
      "Versatile Design",
    ],
    category: "Women's Fashion",
    rating: 4.8,
  },
  3: {
    name: "Men's Jeans",
    price: 250,
    desc: "Classic denim jeans with perfect fit and durability. Made with high-quality denim for lasting comfort.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    features: [
      "Premium Denim",
      "Perfect Fit",
      "Durable Design",
      "Classic Style",
    ],
    category: "Men's Fashion",
    rating: 4.3,
  },
};

const Product = () => {
  const { id } = useParams();
  const p = data[id];
  if (!p)
    return (
      <div className="container my-5">
        <h2>Product Not Found</h2>
      </div>
    );

  return (
    <div className="container my-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/shop">Shop</a>
          </li>
          <li className="breadcrumb-item active">{p.name}</li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-6">
          <img
            src={p.image}
            alt={p.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">{p.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <div className="text-warning me-2">
              {"★".repeat(Math.floor(p.rating))}☆
              <span className="text-muted ms-2">({p.rating})</span>
            </div>
            <span className="badge bg-secondary ms-3">{p.category}</span>
          </div>
          <h3 className="text-primary mb-3">${p.price}</h3>
          <p className="lead">{p.desc}</p>

          <div className="mb-4">
            <h6>Features:</h6>
            <div className="row">
              {p.features.map((feature, index) => (
                <div key={index} className="col-6">
                  <i className="fas fa-check text-success me-2"></i>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex gap-3 mb-4">
            <div className="input-group" style={{ width: "140px" }}>
              <button className="btn btn-outline-secondary">-</button>
              <input
                type="text"
                className="form-control text-center"
                value="1"
                readOnly
              />
              <button className="btn btn-outline-secondary">+</button>
            </div>
            <Link to="/cart" className="btn btn-primary btn-lg flex-fill">
              <i className="fas fa-shopping-cart me-2"></i>
              Add to Cart
            </Link>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">
              <i className="fas fa-heart me-2"></i>Wishlist
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-share me-2"></i>Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
