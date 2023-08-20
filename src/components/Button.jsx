import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <>
      <button
        className={` ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red  text-white border-coral-red "
        } flex items-center justify-center gap-2 py-4 text-lg leading-none rounded-full  px-7 font-montserrat`}
      >
        {label}
        <img src={iconURL} alt="arrow" />
      </button>
    </>
  );
};

export default Button;
