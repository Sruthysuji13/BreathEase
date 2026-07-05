import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginSignup.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup ? "/api/auth/signup" : "/api/auth/login";
    // Prepare request body
    const body = isSignup
      ? { username: formData.name, email: formData.email, password: formData.password }
      : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
      // API returned error
        alert(data.message || "Something went wrong");
        return;
      }

      if (isSignup) {
        alert("Registration successful! Please login.");
        setIsSignup(false);
        setFormData({ name: "", email: "", password: "" });
      } else {
        // On login, save token and redirect
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        navigate("/welcome");
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  return (
    <div className={`login-signup-wrapper ${isSignup ? "signup-active" : ""}`}>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          {isSignup && (
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={() => {
                setIsSignup(!isSignup);
                setFormData({ name: "", email: "", password: "" });
              }}
              style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
            >
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
