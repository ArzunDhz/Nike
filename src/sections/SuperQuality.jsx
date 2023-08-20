import React from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <>
      <section
        id="about-us "
        className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
      >
        <div className="flex flex-col flex-1">
          <h2 className=" max-lg:max-w-lg text-4xl capitalize font-palanquin max-sm:text-[72px] max-sm:leading-[83px] font-bold">
            We provide You
            <span className=" text-coral-red"> Super</span>
            <span className=" text-coral-red"> Quality</span>Shoes
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
          <div className="mt-10 ">
            <Button label="View Detail" iconURL={arrowRight} />
          </div>
        </div>

        <div className="flex items-center justify-center flex-1 ">
          <img
            src={shoe8}
            width={570}
            height={522}
            className="object-contain "
            alt=""
            srcset=""
          />
        </div>
      </section>
    </>
  );
};

export default SuperQuality;
