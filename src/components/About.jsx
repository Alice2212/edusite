import React from "react";
import aboutBanner from "../assets/images/about-banner.png";
import aboutVector from "../assets/images/about-vector.svg";
import Contact from "./Contact";
import Footer from "./Footer";
// import {FaPlay} from "react-icons/fa"

const About = () => {
  return (
    <div
      className="w-screen "
      style={{
        background: "var(--gradient)",
      }}
     
    >
      <div className="container animated bounceInRight mx-auto flex px-5 py-24 items-center justify-between flex-wrap lg:flex-nowrap">
        <div className="lg:justify-self-start justify-self-center lg:mr-12 mr-0">
          <img
            src={aboutBanner}
            alt="about-img"
            className="lg:w-5/6 md:w-3/6 w-5/6 mb-10 object-cover object-center mx-auto"
          />
          <img
            src={aboutVector}
            alt="vector-line"
            className="vector-line z-40"
          />
        </div>

        {/* <button className="absolute bottom-[24%] right-[8%] bg-[--white] w-20 h-20 grid place-items-center	text-2xl rounded-[50%] after:content-none after:absolute after:inset-0 after:rounded-[50%] after:border after:border-[--black] after:animation-[pulseAnim] left-[62%] top-[80%]">
          <FaPlay className="play-icon" />
        </button> */}
        <div className="lg:w-5/12 w-full text-center lg:text-left mx-auto lg:justify-self-end justify-self-center">
          <h1 className="my-4 text-5xl font-bold leading-tight text-[#121217]">
            We Help to Create Possibility & Success in Your Career!
          </h1>
          <p className="text-xl my-12 text-[#6f6f76]">
            Continually administrate process-centric human capital rather than
            bleeding-edge methodologies. Distinctively supply accurate methods
            of empowerment before.
          </p>
          <div className="flex justify-center lg:justify-start mx-auto">
            <button className="btn btn-primary">Get Started Today</button>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
