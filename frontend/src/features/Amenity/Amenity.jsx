import React, { useState } from "react";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import {
  TbBeach,
  TbToolsKitchen2,
  TbAirConditioning,
  TbWashMachine,
  TbWashDry3,
  TbMicrowave,
  TbBath,
  TbIroning1,
} from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { PiPawPrint } from "react-icons/pi";
import "./Amenity.css";

export default function Amenity(props) {
  const { name } = props;

  const displayAmenity = () => {
    if (name === "Parking")
      return <AiOutlineCar size={28} className="icons-amenity" />;
    else if (name === "Kitchen")
      return <TbToolsKitchen2 size={28} className="icons-amenity" />;
    else if (name === "Wifi")
      return <AiOutlineWifi size={28} className="icons-amenity" />;
    else if (name === "TV")
      return <FiMonitor size={28} className="icons-amenity" />;
    else if (name === "Air Conditioning")
      return <TbAirConditioning size={28} className="icons-amenity" />;
    else if (name === "Washer")
      return <TbWashMachine size={28} className="icons-amenity" />;
    else if (name === "Dryer")
      return <TbWashDry3 size={28} className="icons-amenity" />;
    else if (name === "Microwave")
      return <TbMicrowave size={28} className="icons-amenity" />;
    else if (name === "Coffee Maker")
      return <MdOutlineCoffeeMaker size={28} className="icons-amenity" />;
    else if (name === "Pets Allowed")
      return <PiPawPrint size={28} className="icons-amenity" />;
    else if (name === "Bathtub")
      return <TbBath size={28} className="icons-amenity" />;
    else if (name === "Iron")
      return <TbIroning1 size={28} className="icons-amenity" />;
    else return <TbBeach size={28} className="icons-beach" />;
  };

  return (
    <div>
      {displayAmenity()}{name}
    </div>
  );
}
