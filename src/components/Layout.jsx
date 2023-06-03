import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Department from "./Department";
import Teams from "./Teams";
import Home from "./Home";

const Layout = () => {
  return (
    <div className="scroll-smooth">
      <Home />
      <About />
      <Department />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
