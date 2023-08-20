import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [bigShoeImg, setBigShoe] = useState(bigShoe1);

  return (
    <>
      <section
        id="home"
        className="flex flex-col justify-center w-full min-h-screen gap-10 max-container xl:flex-row "
      >
        <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-lg:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Colleciton
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
            <span className="relative z-30 pr-10 xl:bg-white xl:whitespace-nowrap">
              The New Arrival
            </span>
            <br />
            <span className="inline-block mt-3 text-coral-red ">Nike</span>{" "}
            Shoes
          </h1>
          <p className="leading-8 font-montserrat text-slate-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          </p>
          <Button label="Shop Now" iconURL={arrowRight} />

          <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20 ">
            {statistics.map((stat) => (
              <div key={stat.label} className="">
                <p className="text-4xl font-bold font-palanquin ">
                  {stat.value}
                </p>
                <p className=" font-montserrat">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="relative z-10 object-contain "
          />

          <div className="absolute flex gap-4 sm:gap-6 -bottom-[10%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  imgURl={shoe}
                  changeImage={(shoe) => setBigShoe(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
