// Home.js - Fixed with proper images and layout
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Men's Premium Blazer",
    price: 8999,
    originalPrice: 11999,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    category: "Men's Fashion",
    gender: "men",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isHot: false,
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 5999,
    originalPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    category: "Women's Fashion",
    gender: "women",
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isHot: true,
  },
  {
    id: 3,
    name: "Men's Casual Outfit",
    price: 4990,
    originalPrice: 6990,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Men's Casual",
    gender: "men",
    rating: 4.7,
    reviews: 203,
    isNew: true,
    isHot: true,
  },
  {
    id: 4,
    name: "Men's Running Shoes",
    price: 7999,
    originalPrice: 9999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Men's Footwear",
    gender: "men",
    rating: 4.5,
    reviews: 156,
    isNew: false,
    isHot: false,
  },
  {
    id: 5,
    name: "Women's Designer Handbag",
    price: 6999,
    originalPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    category: "Women's Accessories",
    gender: "women",
    rating: 4.9,
    reviews: 67,
    isNew: true,
    isHot: false,
  },
  {
    id: 6,
    name: "Women's Smart Dress",
    price: 9999,
    originalPrice: 12999,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=400&fit=crop",
    category: "Women's Formal",
    gender: "women",
    rating: 4.4,
    reviews: 45,
    isNew: false,
    isHot: true,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Elevate Your Style with StyleHub",
      subtitle:
        "Discover the latest trends in fashion for men and women. Quality meets style in every piece.",
      background:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      buttonText: "Shop Now",
      buttonLink: "/shop",
    },
    {
      title: "Summer Collection 2025",
      subtitle:
        "Fresh styles for the sunny season. Up to 40% off on selected items!",
      background:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=600&fit=crop",
      buttonText: "Explore Summer",
      buttonLink: "/shop?category=summer",
    },
    {
      title: "New Arrivals Every Week",
      subtitle:
        "Stay ahead of fashion trends with our constantly updated collections.",
      background:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop",
      buttonText: "View New Items",
      buttonLink: "/shop?sort=newest",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const featuredProducts = products.filter((p) => p.isHot || p.isNew);
  const bestSellers = products.slice(0, 6);

  return (
    <div>
      {/* Enhanced Hero Section with Carousel */}
      <section
        className="elevate-hero position-relative"
        style={{
          backgroundImage: `url(${heroSlides[currentSlide].background})`,
          minHeight: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        ></div>
        <div
          className="container position-relative"
          style={{ zIndex: 2, paddingTop: "120px" }}
        >
          <div className="hero-content text-white">
            <h1 className="elevate-hero-title display-3 fw-bold mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="lead mb-4 fs-5">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="hero-buttons">
              <a
                href={heroSlides[currentSlide].buttonLink}
                className="btn btn-light btn-lg px-4 me-3"
              >
                <i className="fas fa-bag-shopping me-2"></i>
                {heroSlides[currentSlide].buttonText}
              </a>
              <a
                href="#best-sellers"
                className="btn btn-outline-light btn-lg px-4"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>

        {/* Hero Slider Indicators */}
        <div
          className="hero-indicators"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "2px solid white",
                backgroundColor:
                  index === currentSlide ? "white" : "transparent",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <div className="container my-5 py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4 display-5">Why Choose StyleHub?</h2>
          <p className="lead text-muted">
            We're committed to bringing you the best fashion experience
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="p-4 feature-card text-center hover-lift">
              <div className="feature-icon mb-3">
                <i className="fas fa-tshirt fa-3x text-primary"></i>
              </div>
              <h5>Trending Styles</h5>
              <p className="text-muted">
                Curated collections featuring the latest fashion trends for
                every season and occasion
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 feature-card text-center hover-lift">
              <div className="feature-icon mb-3">
                <i className="fas fa-tag fa-3x text-success"></i>
              </div>
              <h5>Best Prices</h5>
              <p className="text-muted">
                Premium quality fashion at unbeatable prices with regular sales
                and discounts
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 feature-card text-center hover-lift">
              <div className="feature-icon mb-3">
                <i className="fas fa-shipping-fast fa-3x text-info"></i>
              </div>
              <h5>Fast Delivery</h5>
              <p className="text-muted">
                Free shipping on orders over $75 • Express delivery available •
                Easy returns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gender Categories */}
      <div className="container-fluid px-0 mb-5">
        <div className="row g-0">
          <div className="col-md-6">
            <div
              className="category-card men-category text-center p-5 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
                minHeight: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="category-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              ></div>
              <div className="position-relative" style={{ zIndex: 2 }}>
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop"
                  alt="Men's Collection"
                  className="img-fluid mb-4 rounded shadow"
                  style={{
                    maxHeight: "280px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h3 className="text-white mb-3 display-6">Men's Collection</h3>
                <p className="text-white mb-4 fs-5">
                  Sophisticated styles for the modern man
                </p>
                <a
                  href="/shop?category=men"
                  className="btn btn-light btn-lg px-4"
                >
                  Shop Men's Fashion
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="category-card women-category text-center p-5 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #8e44ad 0%, #e84393 100%)",
                minHeight: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="category-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              ></div>
              <div className="position-relative" style={{ zIndex: 2 }}>
                <img
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=300&fit=crop"
                  alt="Women's Collection"
                  className="img-fluid mb-4 rounded shadow"
                  style={{
                    maxHeight: "280px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h3 className="text-white mb-3 display-6">
                  Women's Collection
                </h3>
                <p className="text-white mb-4 fs-5">
                  Elegant fashion for every occasion
                </p>
                <a
                  href="/shop?category=women"
                  className="btn btn-light btn-lg px-4"
                >
                  Shop Women's Fashion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div id="best-sellers" className="container my-5 py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-4">Best Sellers</h2>
          <p className="lead text-muted">
            Our most loved styles by thousands of customers
          </p>
        </div>
        <div className="row g-4">
          {bestSellers.map((product) => (
            <div className="col-lg-4 col-md-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="/shop" className="btn btn-primary btn-lg px-5">
            View All Products <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews-section mt-5 py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4 display-5">
            What Our Style Lovers Say
          </h2>
          <p className="text-center lead mb-5">
            Join thousands of satisfied customers who found their perfect style
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card review-card h-100 border-0 shadow">
                <div className="card-body text-center p-4">
                  <div className="customer-avatar mb-3">
                    <i className="fas fa-user-circle fa-3x text-primary"></i>
                  </div>
                  <div className="text-warning mb-3 fs-5">★★★★★</div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                    alt="Michael T., a satisfied customer"
                    className="rounded-circle mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="card-text fst-italic">
                    "The quality is amazing! I get compliments every time I wear
                    my StyleHub blazer. The fit is perfect!"
                  </p>
                  <h6 className="card-subtitle mb-2 text-primary">
                    - Michael T.
                  </h6>
                  <small className="text-muted">Verified Customer</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card review-card h-100 border-0 shadow">
                <div className="card-body text-center p-4">
                  <div className="customer-avatar mb-3">
                    <i className="fas fa-user-circle fa-3x text-success"></i>
                  </div>
                  <div className="text-warning mb-3 fs-5">★★★★★</div>
                  <img
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop"
                    alt="Sarah L., a style enthusiast"
                    className="rounded-circle mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="card-text fst-italic">
                    "Fast shipping and perfect fit. The summer dress is even
                    more beautiful in person. My new favorite store!"
                  </p>
                  <h6 className="card-subtitle mb-2 text-success">
                    - Sarah L.
                  </h6>
                  <small className="text-muted">Style Enthusiast</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card review-card h-100 border-0 shadow">
                <div className="card-body text-center p-4">
                  <div className="customer-avatar mb-3">
                    <i className="fas fa-user-circle fa-3x text-warning"></i>
                  </div>
                  <div className="text-warning mb-3 fs-5">★★★★★</div>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
                    alt="Jessica M., a fashion blogger"
                    className="rounded-circle mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="card-text fst-italic">
                    "Great prices for designer quality. The handbag is stunning
                    and holds all my essentials perfectly!"
                  </p>
                  <h6 className="card-subtitle mb-2 text-warning">
                    - Jessica M.
                  </h6>
                  <small className="text-muted">Fashion Blogger</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="newsletter-card p-5 rounded shadow">
              <h3 className="mb-3">Stay in Style</h3>
              <p className="text-muted mb-4">
                Subscribe to get updates on new arrivals, special offers and
                style inspiration.
              </p>
              <div className="input-group input-group-lg">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
              <small className="text-muted mt-2 d-block">
                We respect your privacy. Unsubscribe at any time.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
