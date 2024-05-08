import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import { FaDownload, FaCar } from "react-icons/fa";
import RideForm from "../RideForm/RideForm";

const Welcome = () => {
  return (
    <div className="w-11/12 flex p-8 flex-row text-orange-400 shadow-md mt-6 gap-20 justify-between overflow-hidden">
      <div className="mt-24 p-4 font-extrabold w-50">
        <p className="text-6xl">Welcome to</p>
        <p className="text-6xl">VIT Ride</p>
        <div className="mt-4 line-clamp-2">
          Your go-to solution for college campus ride booking. Fast, reliable,
          and tailor-made for your daily commute.
        </div>
        <div className=" flex mt-4 gap-4">
          <Button
            buttonName="Start a Ride"
            bgColor="bg-gray-200"
            textColor="text-black"
            icon={FaCar}
          />
          <div>
            <Button
              buttonName="Download App"
              bgColor="bg-gray-200"
              textColor="text-black"
              icon={FaDownload}
            />
          </div>
        </div>
        <RideForm />
      </div>
      <div>
        <Image
          src="/images/backimg.jpeg"
          alt="ride image"
          width={500}
          height={100}
          className="rotate-12 mt-10 mr-2"
        />
      </div>
    </div>
  );
};

export default Welcome;
