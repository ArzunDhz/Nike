import React from "react";
import Button from "../components/Button";
const Subscribe = () => {
  return (
    <>
      <section
        id="contact-us"
        className="flex flex-col items-center justify-center w-full gap-10max-container "
      >
        <h3 className="text-4xl leading-[68px] ">
          Sign up Form
          <span className=" text-coral-red"> Updates </span> & NewsLetter
        </h3>
        <div className="relative flex justify-center w-full ">
          <input
            type="text"
            placeholder=" subscribe@nike.com"
            className=" w-[80%] h-[50px] border-2 border-gray-600 rounded-full"
          />
          <div className="absolute "></div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
