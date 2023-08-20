import React from "react";
import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <>
      <div className="flex flex-col flex-1">
        <img className=" w-[280px] h-[280px]" src={imgURL} alt={name} />
        <div className="flex flex-col justify-start mt-8 gap-2.5 ">
          <div className="flex ">
            <img src={star} width={24} height={24} alt="rating" srcset="" />
            <p className="text-xl leading-normal font-montserrat text-slate-gray">
              4.5
            </p>
          </div>
          <h3 className="mt-2 font-semibold leading-normal font-palanquin ">
            {name}
          </h3>
          <p className="mt-2 leading-normal font-montserrat text-coral-red">
            {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default PopularProductCard;
