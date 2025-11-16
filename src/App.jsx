import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AIAssistant from "./pages/AIAssistant";
import Transactions from "./pages/Transactions";
import Collaboration from "./pages/Collaboration";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Report from "./pages/Report";
import Support from "./pages/Support";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return ( <Router>
   <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/" element={<LandingPage />} />
  <Route path="/home" element={<Home />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/ai-assistant" element={<AIAssistant />} />
  <Route path="/transactions" element={<Transactions />} />
  <Route path="/collaboration" element={<Collaboration />} />
  <Route path="/settings" element={<Settings />} />
   <Route path="/messages" element={<Messages />} />
  <Route path="/notifications" element={<Notifications />} />
  <Route path="/report" element={<Report />} />
  <Route path="/support" element={<Support />} />
</Routes>
    </Router>
  );
}

export default App;