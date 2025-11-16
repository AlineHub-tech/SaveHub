import React from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";

const Home = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Welcome Back, User!</h1>
        <p>Here’s a quick summary of your activities:</p>

        <div className="cards">
          <div className="card"><h2>Total Savings</h2><p>$12,340</p></div>
          <div className="card"><h2>Recent Transactions</h2><p>5</p></div>
          <div className="card"><h2>Messages</h2><p>2 New</p></div>
          <div className="card"><h2>Notifications</h2><p>3 New</p></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
