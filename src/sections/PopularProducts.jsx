import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <>
      <section className=" max-container max-sm:my-12" id="products">
        <div>
          <h2 className="text-4xl font-bold font-palanquin">
            Our <span className=" text-coral-red">Popular</span> Products
          </h2>
          <p className="mt-2 lg:max-w-lg text-slate-gray font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            alias provident fuga.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
