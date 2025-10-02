import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import List from "./Pages/List";
import Home from "./Pages/Home";
// Components
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
};

export default App;
