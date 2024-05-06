import React from "react";
import Button from "../Button/Button";
import { FaCloud, FaFireAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const RidePerks = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 items-center font-extrabold text-lg w-11/12 shadow-md">
      <div className="text-orange-400 text-5xl font-extrabold">App Perks</div>
      <div className="text-2xl font-bold">
        Unlock the full potential of the VitRide app with exclusive in-app
        benefits designed for the ultimate ride experience.
      </div>
      <div className="flex flex-row w-full gap-8 items-center justify-between px-12 pb-4">
        <div className="bg-slate-200 flex items-center flex-col p-4 gap-2">
          <FaFireAlt className="text-orange-400" />
          <p>Ride History</p>
          <div>
            Track past trips, review your ride experience and manage your budget
            with our comprehensive ride history feature.
          </div>
          <Button buttonName="Discover More" bgColor="bg-gray-100" textColor="black" />
        </div>

        <div className="bg-slate-200 flex items-center flex-col p-4 gap-2">
          <IoTime className="text-orange-400" />
          <p>Split Fare</p>
          <div>
            Share the cost of your rides with friends easily. Our split fare
            option makes group travel cost-effective and convenient.
          </div>
          <Button buttonName="Find out How" bgColor="bg-gray-100" textColor="black" />
        </div>
        <div className="bg-slate-200 flex items-center flex-col p-4 gap-2">
          <FaCloud className="text-orange-400" />
          <p>Lost and Found</p>
          <div>
            Left something behind? Our Lost & Found feature helps you retrieve
            items left in vehicles with just a few taps.
          </div>
          <Button buttonName="Learn More" bgColor="bg-gray-100" textColor="green" />
        </div>
      </div>
    </div>
  );
};

export default RidePerks;
