import React from "react";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section id="footer ">
      <div className="w-full bg-[--rich-black-fogra-29] ">
        <div className="container text-[#F9FAFB] flex flex-wrap mx-auto px-5 py-24">
          <div>
            <h1 className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              EDUSITE
            </h1>
            <p className="text-[#B3B3B3] py-7 lg:w-1/3 sm:w-2/3 md:w-3/3 leading-relaxed">
              Professionally scale cross functional human capital and extensive
              technology.
            </p>
            <div className="flex  gap-3 my-2">
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
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-36 mt-10 md:gap-x-64 md:gap-y-4 sm:gap-12 animated bounceInRight">
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
                  Company
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">About</li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">Terms</li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Privacy Policy
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Careers
                </li>
              </ul>

              {/* 3rd ul */}
              <ul className="max-w-[230px] pb-10 ">
                <li className="text-[#F9FAFB] py-[10px] px-0 text-xl">
                  Job Info
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Select
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Services
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  Payment
                </li>
              </ul>

              {/* 4th ul */}
              <ul className="max-w-[230px] pb-10">
                <li className="text-[#F9FAFB] py-[10px] px-0 text-xl">
                  Contact
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  <span className="font-bold text-[#F9FAFB] inline-grid ">
                    Call &nbsp;:
                  </span>
                  &nbsp; 546 3876 387
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  <span className="font-bold text-[#F9FAFB] inline-grid ">
                    Email &nbsp;:
                  </span>
                  &nbsp; example@gmail.com
                </li>
                <li className="text-[#B3B3B3] py-[10px] px-0 text-sm">
                  <span className="font-bold text-[#F9FAFB] inline-grid">
                    Address &nbsp;:
                  </span>
                  &nbsp; San Francisco, USA
                </li>
              </ul>
            </div>
            <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
            <p className="text-center text-[#B3B3B3] text-sm">
              © 2022. All right reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
