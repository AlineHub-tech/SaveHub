import React from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";
const Report = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Report</h1>
        <p>Total Deposits: $350</p>
        <p>Total Withdrawals: $50</p>
        <p>Net Savings: $300</p>
      </div>
    </div>
  );
};

export default Report;
