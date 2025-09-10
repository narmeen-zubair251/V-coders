import React from "react";
import Image from "next/image";
import { servicesCard } from "@/app/constant/servicesCard";
import { arima } from "../../../font";

function ServicesCard() {
  return (
    <>
      {servicesCard.map((item, index) => (
        <div
          key={index}
          className={`${arima.className} p-5 rounded-xl grid text-start border-2 border-[var(--button-color)] shadow-md transition-all duration-300 hover:bg-[#0ad1eb85] hover:shadow-[0px_6px_18px_rgba(20,3,90,0.4)] hover:-translate-y-1.5`}
        >
          {/* Card Image */}
          <div className="flex justify-start mb-8">
            <Image src={item.src} alt="service" width={50} height={50} />
          </div>

          {/* Title */}
          <h1 className="text-[1.3rem] leading-7 mb-2">{item.title}</h1>

          {/* Description */}
          <p className="text-sm leading-[22px] mb-0">{item.description}</p>

          {/* Read More */}
          <h5 className="mt-2 font-medium cursor-pointer">Read more</h5>
        </div>
      ))}
    </>
  );
}

export default ServicesCard;
