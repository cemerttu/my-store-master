import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import API_BASE_URL from "./utils/api";

function App() {
  const [backendStatus, setBackendStatus] = useState("checking");
  const [backendUrl, setBackendUrl] = useState("");

  useEffect(() => {
    checkBackendConnection();
    setBackendUrl(API_BASE_URL);
  }, []);

  const checkBackendConnection = async () => {
    try {
      console.log("🔗 Testing backend connection to:", API_BASE_URL);
      
      const response = await fetch(`${API_BASE_URL}/api/health`);
      const data = await response.json();
      
      console.log("📡 Backend response:", data);
      
      if (response.ok) {
        setBackendStatus("connected");
        console.log("✅ Backend connected successfully");
      } else {
        setBackendStatus("error");
        console.error("❌ Backend returned error:", data);
      }
    } catch (error) {
      setBackendStatus("error");
      console.error("❌ Backend connection failed:", error);
    }
  };

  // Backend status indicator (optional - remove in production)
  const BackendStatusIndicator = () => {
    if (backendStatus === "checking") {
      return (
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: '#ffa500',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000
        }}>
          🔄 Checking backend...
        </div>
      );
    }
    
    if (backendStatus === "error") {
      return (
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: '#ff4444',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000
        }}>
          ❌ Backend offline
        </div>
      );
    }
    
    return (
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: '#4CAF50',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 1000
      }}>
        ✅ Backend connected
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <BackendStatusIndicator />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop backendStatus={backendStatus} />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;