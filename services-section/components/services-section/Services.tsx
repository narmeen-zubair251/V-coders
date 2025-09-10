import React from "react";
import Button from "../button/Button";
import { arima } from "../../font";
import ServicesCard from "./services-card/ServicesCard";

function Services() {
  return (
    <section className="w-full bg-[var(--background-color)] text-start px-6 sm:px-6 md:px-8 lg:px-10 py-[9.625rem] pb-[10rem]">
  
  {/* Common container */}
  <div className="w-full px-4 sm:px-4 md:px-8 lg:px-10">
    
    {/* Header */}
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mb-[70px]">
      {/* Left side text */}
      <div className="md:max-w-full mb-6 lg:mb-0">
        <h1
          className={`${arima.className} text-[28px] leading-[36px] lg:text-[48px] lg:leading-[56px] mb-3 md:text-[36px] md:leading-[44px] sm:text-[32px] sm:leading-[40px]`}
        >
          Services We Offer
        </h1>
        <p
          className={`${arima.className} text-[16.73px] leading-[28px] lg:text-[18px] lg:leading-[28px] sm:text-[14px] sm:leading-[24px]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quidem optio earum libero quod sed..
        </p>
      </div>

      {/* Button */}
      <div className="lg:px-5 w-full lg:w-auto">
        <Button
          text="Show All Services"
          className="w-full px-4 py-[0.7rem] text-[0.9rem]
          sm:text-[0.95rem] sm:px-5 sm:py-[0.75rem]
          md:text-base
          lg:w-[250px] lg:px-8 lg:py-4 lg:text-lg
          rounded-lg transition-all duration-300 sm:text-center"
        />
      </div>
    </div>

    {/* Cards */}
    <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ServicesCard />
    </div>
  </div>
</section>

    
  );
}

export default Services;
