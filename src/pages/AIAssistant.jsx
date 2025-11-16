import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = e => {
    e.preventDefault();
    if(!input) return;
    setMessages(`[...messages, { from:"user", text: input }, { from:"ai", text: AI says: "${input}"}]`);
    setInput("");
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>AI Assistant</h1>
        <div className="chat-container">
          <div className="chat-box">
            {messages.map((m,i) => (
              <div key={i} className={`message ${m.from}`}>{m.text}</div>
            ))}
          </div>
          <form className="chat-input" onSubmit={sendMessage}>
            <input type="text" placeholder="Ask AI..." value={input} onChange={e=>setInput(e.target.value)} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;