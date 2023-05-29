import React from "react";
import arrow from "../assets/images/cta-vector.svg";
import contactBanner from "../assets/images/cta-banner.png";

const Contact = () => {
  return (
    <section className="w-full h-[15rem] bg-[--raisin-black] ">
      <div className="container flex flex-wrap mx-auto py-18 relative overflow-y-hidden z-10">
        <div className="flex justify-center items-center mt-8 ">
          <h1 className="text-white text-2xl font-bold leading-loose">
            Create Free Account & <br></br>get Register
          </h1>
          <img
            src={arrow}
            alt=""
            className="
            lg:visible invisible mt-20"
          />
          <button className="btn btn-primary">Register Now</button>
        </div>
        <div className="absolute left-[70%] top-[10%] lg:visible invisible ">
          <img src={contactBanner} alt="" className="object-fill h-[300px]  " />
        </div>
      </div>
    </section>
  );
};

export default Contact;
