import React from "react";
import aboutBanner from "../assets/images/about-banner.png";
import aboutVector from "../assets/images/about-vector.svg";
// import {FaPlay} from "react-icons/fa"

const About = () => {
  return (
    // <section id="about" className="about p-[--section-padding] ">
    //   <div className="container">
    //     <figure className="relative mb-10">
    //       <img src={aboutBanner} alt="about-img" className="w-[100%]" />
    //       <img src={aboutVector} alt="vector-line" className="vector-line" />
    //       <button className="absolute bottom-[24%] right-[8%] bg-[--white] w-20 h-20 grid ">
    //         <FaPlay className="play-icon" />
    //       </button>
    //     </figure>
    //   </div>
    // </section>

    <div
      className="w-screen "
      style={{
        background: "var(--gradient)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <img
          className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
          alt="A young lady sits, holding a pen and a notebook."
          src={aboutBanner}
        /> */}
        <img
          src={aboutBanner}
          alt="about-img"
          className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
        />
        <img src={aboutVector} alt="vector-line" className="vector-line" />

        {/* <button className="absolute bottom-[24%] right-[8%] bg-[--white] w-20 h-20 grid place-items-center	text-2xl rounded-[50%] after:content-none after:absolute after:inset-0 after:rounded-[50%] after:border after:border-[--black] after:animation-[pulseAnim] left-[62%] top-[80%]">
          <FaPlay className="play-icon" />
        </button> */}
        <div className="text-center lg:w-10/12 w-full text-black">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            We Help to Create Possibility & Success in Your Career!
          </h1>
          <p className="text-2xl mb-8">
            Continually administrate process-centric human capital rather than
            bleeding-edge methodologies. Distinctively supply accurate methods
            of empowerment before.
          </p>
          <div className="flex justify-center mx-auto">
            <button className="btn btn-primary">Get Started Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
