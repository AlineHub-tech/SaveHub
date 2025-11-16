import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";
const Support = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ticket sent: ${message}`);
    setMessage("");
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Support</h1>
        <form onSubmit={handleSubmit}>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Describe your issue..." required/>
          <button type="submit">Send Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default Support;