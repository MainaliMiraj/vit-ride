import Button from "@/components/Button/Button";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaBell, FaWallet } from "react-icons/fa";
import Image from "next/image";

const WhyVit = () => {
  return (
    <div className="flex flex-row mt-6 w-10/12  bg-white p-10 gap-x-40 items-center justify-center font-extrabold text-lg">
      <div className="max-w-80">
        <p className="text-5xl text-orange-400 font-extrabold">Why VitRide?</p>
        <p className="mt-4">
          Discover why VitRide is the preferred ride booking service for campus
          trips. Safety, sustainability, and speed all in one app.
        </p>
        <div className="mt-8">
          <label className="inline-flex items-center gap-2 text-orange-400">
            <BsSuitcaseLgFill />
            <span>Real-Time</span>
          </label>
          <div className="mb-4 ml-6">
            Get instant updates on ride availability and track your driver in
            real-time for maximum efficiency.
          </div>
        </div>
        <div>
          <label className="inline-flex items-center gap-2 text-orange-400">
            <FaWallet />
            <span>Wallet Friendly</span>
          </label>
          <div className="mb-4 ml-6">
            Discover why RidePulse is the preferred ride booking service for
            campus trips. Safety, sustainability, and speed all in one app.
          </div>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center gap-2 text-orange-400">
            <FaBell />
            <span>Clean Ride</span>
          </label>
          <div className="ml-6">
            Our commitment to sustainability means every ride is as eco-friendly
            as it is convenient.
          </div>
        </div>
        <Button
          bgColor="bg-gray-200"
          buttonName="More Features"
          textColor="black"
        />
      </div>

      <div>
        <Image
          src="/images/chill.jpeg"
          alt="chill and ride"
          width={800}
          height={100}
          className="scale-y-75 scale-x-75"
        />
      </div>
    </div>
  );
};

export default WhyVit
