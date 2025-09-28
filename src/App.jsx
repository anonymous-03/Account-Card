import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserForm from "./components/UserForm";
import GenerateCard from "./components/GenerateCard";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-user" element={<UserForm setUser={setUser} />} />
        <Route path="/generate-card" element={<GenerateCard user={user} />} />
      </Routes>
    </Router>
  );
}
