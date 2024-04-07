import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full px-5 mt-5 space-y-3 animate-pulse">
      <div className="w-full h-4 bg-gray-300 rounded-full dark:bg-gray-300"></div>
      <div className="w-full h-4 bg-gray-300 rounded-full dark:bg-gray-300"></div>
      <div className="w-full h-4 bg-gray-300 rounded-full dark:bg-gray-300"></div>
      <div className="w-full h-4 bg-gray-300 rounded-full dark:bg-gray-300"></div>
    </div>
  );
};

export default Skeleton;
