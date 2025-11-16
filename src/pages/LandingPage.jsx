import React from "react";
import { Link } from "react-router-dom";
import "../home.css";
import { FaWallet, FaUsers, FaBell, FaChartLine, FaComments } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Welcome to <span>SaveHub</span>
          </h1>
          <p className="hero-text">
            Your smart, secure, and modern way to manage money, track savings,
            collaborate, and make better financial decisions with the help of AI.
          </p>
          
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/home" className="start-btn"><button>Get Started</button></Link>
        </div>

        <div className="hero-right">
          <img src="/assets/hero.png" alt="SaveHub dashboard" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2 className="section-title">Why Choose SaveHub?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaWallet className="f-icon" />
            <h3>Smart Money Tracking</h3>
            <p>Easily track income, expenses, and your savings progress in one place.</p>
          </div>

          <div className="feature-card">
            <FaChartLine className="f-icon" />
            <h3>Instant Reports</h3>
            <p>Generate clean financial reports with real-time analytics.</p>
          </div>

          <div className="feature-card">
            <FaUsers className="f-icon" />
            <h3>Collaboration</h3>
            <p>Work together with partners, family, teams, or business members.</p>
          </div>

          <div className="feature-card">
            <FaBell className="f-icon" />
            <h3>Smart Notifications</h3>
            <p>Stay updated with payment alerts, reminders, and progress updates.</p>
          </div>

          <div className="feature-card">
            <FaComments className="f-icon" />
            <h3>AI Assistant</h3>
            <p>Get personalized financial guidance using AI-powered insights.</p>
          </div>

        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="stats">
        <div className="stat-card">
          <h3>12K+</h3>
          <p>Active Users</p>
        </div>

        <div className="stat-card">
          <h3>$1.2M</h3>
          <p>Total Savings Tracked</p>
        </div>

        <div className="stat-card">
          <h3>5K+</h3>
          <p>Monthly Reports Generated</p>
        </div>

        <div className="stat-card">
          <h3>98%</h3>
          <p>User Satisfaction</p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <h2>Start Your Financial Journey Today</h2>
        <p>SaveHub empowers you to take full control of your finance with ease.</p>
        <button className="cta-btn-big">Create Your Account</button>
      </section>
    </div>
  );
}