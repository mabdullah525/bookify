import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>🏠 Home Page</div>} />
      <Route path="/about" element={<div>ℹ️ About Page</div>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
