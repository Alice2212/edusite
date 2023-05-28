import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Department from "./components/Department";
import Teams from "./components/Teams";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="department" element={<Department />}></Route>
        <Route path="teams" element={<Teams />}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
