import React from "react";
import details from "../Data/Department-Data";
import { Card, Button } from "flowbite-react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Contact from "./Contact";
import Footer from "./Footer";

const department = () => {

 

  const departmentLists = details.map((data) => (
    <div className="max-w-sm mb-8 ">
      <Card imgSrc={data.image} className="animated puffIn">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
        <div className="flex flex-wrap items-center ">
          <div>
            <Button className="btn-primary hover:bg-amber-500 focus:bg-[--gambog] focus:outline outline-inherit">
              Learn
              <AiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  ));

  return (
    <div
      className="w-screen "
      style={{
        background: "var(--gradient)",
      }}
    >
      <div className="department container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h2 className="my-4 text-5xl font-bold leading-tight text-center text-[#121217] mb-8">
          We Have Most of Popular Departments
        </h2>
        {/* department list */}
        <div className="department-list mb-4 flex flex-wrap items-center justify-center mx-auto gap-12">
          {departmentLists}
        </div>
        <div className="flex justify-center mx-auto p-8">
          <button className="btn btn-primary">view All Departments</button>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};
export default department;
