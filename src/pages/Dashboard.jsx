import React from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";

const Dashboard = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Dashboard</h1>
        <div className="cards">
          <div className="card"><h2>Total Savings</h2><p>$12,340</p></div>
          <div className="card"><h2>Transactions</h2><p>45 Recent</p></div>
          <div className="card"><h2>Collaborations</h2><p>5 Active</p></div>
          <div className="card"><h2>Notifications</h2><p>3 New</p></div>
        </div>

        <div className="charts">
          <h3>Monthly Savings Overview</h3>
          <div className="chart-mock">[Chart Placeholder]</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
