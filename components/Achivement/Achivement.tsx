import React from 'react'

const Achivement = () => {
  return (
    <div className="flex flex-col items-center w-11/12 mt-6 gap-4 shadow-md">
      <div className="text-orange-400 text-6xl">Our Achivements</div>
      <div className="text-xl font-bold">
        VitRide by numbers-celebrating thousand of trips across colleges,saving
        galore, and a greener footprint.
      </div>
      <div className="flex justify-between w-8/12 bg-gray-200 py-4 px-8 mb-4 z-50 flex-row">
        <div>
          <p className="text-3xl text-orange-400">12000</p>
          <p>Trips Completed</p>
        </div>
        <div>
          <p className="text-3xl text-orange-400">9500</p>
          <p>Happy Users</p>
        </div>
        <div>
          <p className="text-3xl text-orange-400">8</p>
          <p>Years Running</p>
        </div>
      </div>
    </div>
  );
}

export default Achivement