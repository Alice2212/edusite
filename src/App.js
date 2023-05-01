import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
