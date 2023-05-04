import React from 'react'

const Service = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        background: "var(--gradient)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h2 className="my-4 text-5xl font-bold leading-tight text-center mb-8">
          We Have Most of Popular Departments
        </h2>
        {/* department list */}
        <div className="department-list">
          
        </div>
      </div>
    </div>
  );
}
export default Service
