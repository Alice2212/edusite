import React from 'react';
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section id="footer">
      <div className="w-full bg-[--rich-black-fogra-29] ">
        <div className="container text-[#F9FAFB] flex flex-wrap mx-auto px-5 py-24">
          <div>
            <h1>Eduland</h1>
            <p className="text-[#B3B3B3] py-7">
              Professionally scale cross functional human capital and extensive
              technology.
            </p>
            <div className="flex  gap-3">
              <AiFillGoogleCircle
                size={38}
                className="bg-[#2A2A32] rounded-full p-[7px]  hover:bg-inherit"
              />
              <AiFillTwitterCircle
                size={38}
                className="bg-[#2A2A32] rounded-full p-[7px]  hover:bg-inherit"
              />
              <AiFillInstagram
                size={38}
                className="bg-[#2A2A32] rounded-full p-[7px]  hover:bg-inherit"
              />
              <AiFillLinkedin
                size={38}
                className="bg-[#2A2A32] rounded-full p-[7px]  hover:bg-inherit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
