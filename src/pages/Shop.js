// Shop.js - Fixed with proper images
import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { 
    id: 1, 
    name: "Men's Casual Shirt", 
    price: 1200, 
    originalPrice: 1800,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    category: "Men's Fashion",
    rating: 4.5,
    isNew: true
  },
  { 
    id: 2, 
    name: "Women's Summer Dress", 
    price: 2000, 
    originalPrice: 2500,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    category: "Women's Fashion",
    rating: 4.8,
    isHot: true
  },
  { 
    id: 3, 
    name: "Men's Jeans", 
    price: 250, 
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    category: "Men's Fashion",
    rating: 4.3
  },
  { 
    id: 4, 
    name: "Women's Handbag", 
    price: 10000, 
    originalPrice: 12000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    category: "Women's Accessories",
    rating: 4.9,
    isNew: true
  },
  { 
    id: 5, 
    name: "Men's Jacket", 
    price: 4244, 
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Men's Fashion",
    rating: 4.6
  },
  { 
    id: 6, 
    name: "Women's Shoes", 
    price: 5839, 
    originalPrice: 7000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
    category: "Women's Footwear",
    rating: 4.7,
    isHot: true
  },
  { 
    id: 7, 
    name: "Men's Watch", 
    price: 5939, 
    originalPrice: 6500,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop",
    category: "Men's Accessories",
    rating: 4.8
  },
  { 
    id: 8, 
    name: "Women's Jewelry", 
    price: 5949, 
    originalPrice: 7000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    category: "Women's Accessories",
    rating: 4.9,
    isNew: true
  },
  { 
    id: 9, 
    name: "Men's Sneakers", 
    price: 6486, 
    originalPrice: 8000,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    category: "Men's Footwear",
    rating: 4.5
  },
  { 
    id: 10, 
    name: "Women's Blouse", 
    price: 4010, 
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    category: "Women's Fashion",
    rating: 4.4
  },
  { 
    id: 11, 
    name: "Men's Formal Shoes", 
    price: 5949, 
    originalPrice: 7500,
    image: "https://images.unsplash.com/photo-1673614929885-faf0554c7a0a?w=400&h=400&fit=crop",
    category: "Men's Footwear",
    rating: 4.7
  },
  { 
    id: 12, 
    name: "Women's Skirt", 
    price: 6940, 
    originalPrice: 8500,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    category: "Women's Fashion",
    rating: 4.6,
    isHot: true
  },
];

const Shop = () => (
  <div className="container my-5">
    <h1 className="text-center mb-4 display-4 fw-bold">Shop All Products</h1>
    <p className="text-center lead text-muted mb-5">Discover our complete collection of fashion items</p>
    <div className="row g-4">
      {products.map(product => (
        <div className="col-lg-4 col-md-6" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
);

export default Shop;