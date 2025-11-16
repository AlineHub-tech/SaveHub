import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";
const Settings = () => {
  const [name, setName] = useState("User Name");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Profile updated!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Settings</h1>
        <form onSubmit={handleSave}>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;