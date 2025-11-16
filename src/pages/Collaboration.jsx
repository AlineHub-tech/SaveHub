import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";
const Collaboration = () => {
  const [team] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if(!message) return;
    setChat([...chat, { from: "You", text: message }]);
    setMessage("");
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Collaboration</h1>
        <h3>Team Members</h3>
        <ul>
          {team.map(t=> <li key={t.id}>{t.name}</li>)}
        </ul>

        <div className="chat-box">
          {chat.map((c,i)=> <p key={i}><b>{c.from}:</b> {c.text}</p>)}
        </div>
        <form onSubmit={sendMessage}>
          <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Send message..."/>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Collaboration;

