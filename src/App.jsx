import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>🏠 Home Page</div>} />
      <Route path="/about" element={<div>ℹ️ About Page</div>} />
    </Routes>
  );
};

export default App;
