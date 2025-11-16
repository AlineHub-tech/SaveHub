import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaExchangeAlt,
  FaUsers,
  FaTachometerAlt,
  FaHome,
  FaCog,
  FaBell,
  FaChartBar,
  FaLifeRing
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Smart Saving</h2>
      <nav>
        <ul>
          <li><Link to="/ai-assistant"><FaRobot /> AI Assistant</Link></li>
          <li><Link to="/transactions"><FaExchangeAlt /> Transactions</Link></li>
          <li><Link to="/collaboration"><FaUsers /> Collaboration</Link></li>
          <li><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
          <li><Link to="/home"><FaHome /> Home</Link></li>
          <li><Link to="/settings"><FaCog /> Settings</Link></li>
          <li><Link to="/notifications"><FaBell /> Notifications</Link></li>
          <li><Link to="/report"><FaChartBar /> Report</Link></li>
          <li><Link to="/support"><FaLifeRing /> Support</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

