import React from "react";
import Instructor1 from "../assets/images/instructor-1.png";
import { Button } from "flowbite-react";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Teams = () => {
  return (
    <section
      className="w-screen "
      style={{
        background: "var(--gradient)",
      }}
    >
      <div className="container mx-auto px-5 py-24  ">
        <div className="flex flex-wrap lg:justify-between items-center justify-center mt-12 mx-auto">
          <h2 className="text-4xl font-bold leading-normal lg:text-left text-center max-w-md">
            Introduce with Our Famous Teacher
          </h2>
          <button className="btn btn-primary m-4 bg-[--orange-web] text-white hover:bg:[--gambog] focus:bg:[--gambog] focus:outline-[--gambog] align-middle ">
            View all teachers
          </button>
        </div>

        <div className=" grid grid-cols-3 gap-12">
          <div className="flex items-center flex-col mt-12">
            <figure className="mb-5">
              <img src={Instructor1} alt="Shaapir Prio" />
            </figure>

            <h3 className="text-[--oynx] ">Shaapir Prio</h3>
            <p className="mb-3">Assistant Director</p>
            <div className="flex  gap-3">
              <AiFillGoogleCircle size={24} />
              <AiFillTwitterCircle size={24} />
              <AiFillInstagram size={24} />
              <AiFillLinkedin size={24} />
            </div>
          </div>
          <div className="flex items-center flex-col mt-12">
            <figure className="mb-5">
              <img src={Instructor1} alt="Shaapir Prio" />
            </figure>

            <h3 className="text-[--oynx] ">Shaapir Prio</h3>
            <p className="mb-3">Assistant Director</p>
            <div className="flex  gap-3">
              <AiFillGoogleCircle size={24} />
              <AiFillTwitterCircle size={24} />
              <AiFillInstagram size={24} />
              <AiFillLinkedin size={24} />
            </div>
          </div>
          <div className="flex items-center flex-col mt-12">
            <figure className="mb-5">
              <img src={Instructor1} alt="Shaapir Prio" />
            </figure>

            <h3 className="text-[--oynx] ">Shaapir Prio</h3>
            <p className="mb-3">Assistant Director</p>
            <div className="flex  gap-3">
              <AiFillGoogleCircle size={24} />
              <AiFillTwitterCircle size={24} />
              <AiFillInstagram size={24} />
              <AiFillLinkedin size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
