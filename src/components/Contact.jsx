import React from "react";
import arrow from "../assets/images/cta-vector.svg";
import contactBanner from "../assets/images/cta-banner.png";

const Contact = () => {
  return (
    <section className="w-full bg-[--raisin-black] ">
      <div className="container flex flex-wrap mx-auto   py-18 relative overflow-y-hidden z-10">
        <div className="flex flex-wrap flex-row justify-center items-center my-16 ">
          <h1 className="text-white text-3xl font-bold leading-loose lg:w-1/2 w-full ">
            Create Free Account & get Register
          </h1>
          <img
            src={arrow}
            alt=""
            className="
            lg:visible invisible md:mt-4 lg:mt-20 md:self-center"
          />
          <button className="btn btn-primary">Register Now</button>
        </div>
        <div className="absolute left-[70%] -top-[5%] lg:visible invisible ">
          <img src={contactBanner} alt="" className="object-fill h-[300px]  " />
        </div>
      </div>
    </section>
  );
};

export default Contact;
