import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <>
      <section className="flex items-center gap-10 justify-wrap max-xl:flex-col-reverse max-container">
        <div className="flex flex-col flex-1">
          <img
            src={offer}
            width={773}
            height={687}
            className="object-contain w-full "
            alt=""
          />
        </div>

        <div className="flex flex-col flex-1">
          <h2 className=" max-lg:max-w-lg text-4xl capitalize font-palanquin max-sm:text-[72px] max-sm:leading-[83px] font-bold">
            <span className=" text-coral-red">Special</span>
            Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            sed quasi, quia ipsa delectus a itaque harum dicta magnam unde.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptatem quibusdam quis, vel quia necessitatibus laborum dolorum
            et.
          </p>
          <div className="flex flex-wrap gap-10 mt-10 ">
            <Button label="ShopNow" iconURL={arrowRight} />
            <Button
              backgroundColor=" bg-white"
              textColor=" text-slate-gray"
              borderColor=" border-slate-gray"
              label="Learn More"
              iconURL={arrowRight}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
