import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Register from "./Pages/Register";
import Login from "./Pages/Login";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>🏠 Home Page</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
