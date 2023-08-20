import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  console.log(services);
  return (
    <>
      <section
        className="flex flex-wrap justify-center max-container gap-9"
        id="servies"
      >
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </>
  );
};

export default Services;
