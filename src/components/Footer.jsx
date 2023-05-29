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
            <p className="text-[#B3B3B3] py-7 lg:w-2/3 sm:w-2/3 md:w-3/3">
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
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-64 mt-10 md:gap-x-64 md:gap-y-4 sm:gap-12">
              <ul className="max-w-[230px] pb-10 ">
                <li className="text-[#F9FAFB] py-[10px] px-0 text-xl">
                  Services
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Design
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Developement
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Marketing
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Content Writing
                </li>
              </ul>

              {/* 2nd ul */}
              <ul className="max-w-[230px] pb-10">
                <li className="text-[#F9FAFB] py-[10px] px-0 text-xl">
                  Services
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Design
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Developement
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Marketing
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Content Writing
                </li>
              </ul>

              {/* 3rd ul */}
              <ul className="max-w-[230px] pb-10 ">
                <li className="text-[#F9FAFB] py-[10px] px-0 text-xl">
                  Services
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Design
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Developement
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Marketing
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Content Writing
                </li>
              </ul>

              {/* 4th ul */}
              <ul className="max-w-[230px] pb-10">
                <li className="text-[#F9FAFB] py-[10px] px-0 text-xl">
                  Services
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Design
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Developement
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Marketing
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Content Writing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
