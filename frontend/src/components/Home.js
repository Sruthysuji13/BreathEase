import React, { useState } from "react";
import "../styles/Home.css";
import LoginSignup from "./LoginSignup"; // Make sure the path is correct

function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="home-container">
      {/* Decorative image on the right */}
      <img src="/bg.jpg" alt="background design" className="side-image" />

      {/* Welcome section */}
      <div className="welcome-content">
        <h1>Welcome to BreathEase<br></br></h1>
        
        <p className="quote">
          Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.
          In the quiet moments of breath and awareness, we find not escape, but a return — a return to presence, to peace, to the essence of who we truly are.
          <br></br><br></br> "Inhale peace, exhale stress. Begin your mindful journey today."
        </p>
        <button
          className="get-started-btn"
          onClick={() => setShowAuthModal(true)}
        >
          Get Started
        </button>
      </div>

      {/* Floating Bubbles */}
      <div className="floating-bubbles">
        {[...Array(10)].map((_, i) => (
          <span key={i} className={`bubble bubble${i + 1}`}></span>
        ))}
      </div>

      <footer className="home-footer">
        © {new Date().getFullYear()} All rights reserved.
      </footer>

      {/* Modal */}
      {showAuthModal && (
  <div className="login-signup-wrapper" onClick={() => setShowAuthModal(false)}>
    <div className="form-box" onClick={(e) => e.stopPropagation()}>
      <LoginSignup />
    </div>
  </div>
)}

    </div>
  );
}

export default Home;
