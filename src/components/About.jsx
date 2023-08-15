import React, { useEffect } from "react";
import aboutBanner from "../assets/images/about-banner.png";
import aboutVector from "../assets/images/about-vector.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-out"
      data-aos-easing="ease-in"
      data-aos-delay="300"
      data-aos-offset="0"
      className="w-screen "
      id="about"
      style={{
        background: "var(--gradient)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-between flex-wrap lg:flex-nowrap">
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

  
        <div className="lg:w-5/12 w-full text-center lg:text-left mx-auto lg:justify-self-end justify-self-center ">
          <h1 className="my-4 text-5xl font-bold leading-tight text-[#121217] overflow-hidden">
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
    </div>
  );
};

export default About;
