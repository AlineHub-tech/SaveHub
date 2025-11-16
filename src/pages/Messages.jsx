import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";

const Messages = () => {
  const [messages, setMessages] = useState([
    { id:1, from:"Alice", text:"Hello, how are you?", read:false },
    { id:2, from:"Bob", text:"Your transaction was successful.", read:true },
  ]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if(!newMsg) return;
    setMessages([{ id: messages.length+1, from:"You", text:newMsg, read:true }, ...messages]);
    setNewMsg("");
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Messages</h1>
        <form onSubmit={sendMessage}>
          <input type="text" placeholder="Write a message..." value={newMsg} onChange={e=>setNewMsg(e.target.value)} />
          <button type="submit">Send</button>
        </form>
        <ul>
          {messages.map(m=> <li key={m.id}><b>{m.from}:</b> {m.text} {m.read?"":"(Unread)"}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
