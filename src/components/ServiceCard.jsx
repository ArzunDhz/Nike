import React from "react";
import img from "../../src/assets/icons/truck-fast.svg";

const ServiceCard = ({ imgURL, label, subtext }) => {
  const link = "../.." + imgURL;
  console.log(link);
  return (
    <>
      <div className=" flex-1 px-10  py-16 sm:w-[350px] sm:min-w[350px] w-full rounded-[20px]  shadow-3xl ">
        <div className="flex items-center justify-center rounded-full bg-coral-red w-11 h-11">
          <img src={img} width={24} height={24} alt="fasdf" srcset="" />
        </div>
        <h3 className="mt-5 font-bold leading-normal font-palanquin ">
          {label}
        </h3>
        <p className="text-lg font-montserrat text-slate-gray">{subtext}</p>
      </div>
    </>
  );
};

export default ServiceCard;
