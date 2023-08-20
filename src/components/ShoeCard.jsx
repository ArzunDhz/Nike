import React from "react";

const ShoeCard = ({ imgURl, changeImage, bigShoeImg }) => {
  const handelClick = () => {
    if (bigShoeImg !== imgURl.bigShoe) {
      changeImage(imgURl.bigShoe);
    }
  };

  return (
    <>
      <div
        onClick={handelClick}
        className={` border-2 rounded-xl ${
          bigShoeImg === imgURl.bigShoe
            ? "border-coral-red"
            : " border-transparent"
        } cursor-pointer max-sm:flex-1  `}
      >
        <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
          <img
            src={imgURl.thumbnail}
            alt="bIG SHOE"
            width={127}
            height={103}
            srcset=""
          />
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
