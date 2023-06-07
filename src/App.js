import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
import Header from "./components/Header";
// import Department from "./components/Department";
// import Teams from "./components/Teams";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Header />
      <Layout/>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="department" element={<Department />}></Route>
        <Route path="teams" element={<Teams />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
