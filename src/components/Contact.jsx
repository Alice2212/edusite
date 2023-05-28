import React from "react";
import contactImg from "../assets/images/cta-banner.png"
import arrow from "../assets/images/cta-vector.svg"

const Contact = () => {
  return (
    <div
      className="w-screen  h-[24rem]"
      style={{
        background: "var(--raisin-black)",
      
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-between flex-wrap lg:flex-nowrap text-[#FFFFFF]">
        <div className="flex gap-12">
          <div className="text-2xl">Create Free Account & Get Register
            <img src={arrow} alt="" />
          </div>

          <div className="flex justify-center lg:justify-start mx-auto">
            <button className="btn btn-primary">Register Now</button>
          </div>
        </div>
        <div>
            <img src={contactImg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
