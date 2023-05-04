import React from 'react'
import details from '../Data/Department-Data';
import { Card } from "flowbite-react";

const Service = () => {
  const departmentLists = details.map((data) => (
    <div className="max-w-sm mb-8">
      <Card imgSrc={data.image}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
       
      </Card>
    </div>
  ));

  return (
    <div
      className="w-screen"
      style={{
        background: "var(--gradient)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h2 className="my-4 text-5xl font-bold leading-tight text-center mb-8">
          We Have Most of Popular Departments
        </h2>
        {/* department list */}
        <div className="department-list mb-4 flex gap-8">{departmentLists}</div>
      </div>
    </div>
  );
}
export default Service
