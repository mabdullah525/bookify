import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Register from "./Pages/Register";
import Login from "./Pages/Login";
// Components
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>🏠 Home Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
