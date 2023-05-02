import React from "react";
import aboutBanner from "../assets/images/about-banner.png";
import aboutVector from "../assets/images/about-vector.svg";
import {FaPlay} from "react-icons/fa"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <figure>
          <img src={aboutBanner} alt="about-img" />
          <img src={aboutVector} alt="vector-line" />
          <button className="play-btn">
            <FaPlay/>
          </button>
        </figure>
      </div>
    </section>
  );
};

export default About;
