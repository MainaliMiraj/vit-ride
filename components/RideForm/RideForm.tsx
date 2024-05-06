'use client'

import React, { FormEvent, useState } from "react";
import Button from "../Button/Button";

const RideForm = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e:FormEvent) => {
    // e.preventDefault();
    // console.log("Pickup:", pickup);
    // console.log("Destination:", destination);
    // Add your logic here to perform actions with pickup and destination data
  };

  return (
    <div className="bg-gray-100 flex   mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Where to?</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pickup"
            >
              Pickup Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pickup"
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="destination"
            >
              Destination
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="destination"
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button buttonName="Search Ride" bgColor="bg-gray-100" textColor="text-black"/>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Search
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RideForm;
