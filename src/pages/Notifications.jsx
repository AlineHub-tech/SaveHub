import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";
const Notifications = () => {
  const [notifications] = useState([
    { id: 1, text: "Transaction successful", date: "2025-11-16" },
    { id: 2, text: "New message from AI Assistant", date: "2025-11-15" },
  ]);

  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Notifications</h1>
        <ul>
          {notifications.map(n=> <li key={n.id}>{n.date} - {n.text}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;