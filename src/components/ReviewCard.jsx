import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-normal">
        <img
          src={imgURL}
          className="object-contain rounded-full"
          height={180}
          width={180}
          alt=""
        />
        <p className="max-w-sm mt-6 ">{feedback}</p>
        <div className="flex items-center justify-center gap-2.5 ">
          <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0 "
            alt=""
          />
          <p className=" font-montserrat text-slate-gray">{rating}</p>
        </div>
        <h3 className="mt-1 text-3xl text-center font-palanquin">
          {customerName}
        </h3>
      </div>
    </>
  );
};

export default ReviewCard;
