import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../index.css";
const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: 200, date: "2025-11-16" },
    { id: 2, type: "Withdrawal", amount: 50, date: "2025-11-15" },
  ]);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Deposit");

  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      type,
      amount: parseFloat(amount),
      date: new Date().toISOString().split("T")[0],
    };
    setTransactions([newTransaction, ...transactions]);
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="page-content">
        <h1>Transactions</h1>
        <form onSubmit={addTransaction}>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
          </select>
          <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
          <button type="submit">Add Transaction</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>ID</th><th>Type</th><th>Amount</th><th>Date</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t=>(
              <tr key={t.id}>
                <td>{t.id}</td><td>{t.type}</td><td>${t.amount}</td><td>{t.date}</td>
                <td><button onClick={()=>deleteTransaction(t.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
