import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <section className=" max-contianer">
      <h3 className="text-4xl font-bold text-center font-palanquin">
        What ours
        <span className=" text-coral-red"> Customer </span>Says
      </h3>
      <div className="flex items-center flex-1 m-auto mt-24 max-lg:flex-col into-text justify-evenly">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
