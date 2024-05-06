import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { FaDownload, FaCar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <Navbar />

      <div className="w-full flex p-4 flex-row text-orange-400">
        <div className="mt-20 p-4 font-extrabold">
          <p className="text-6xl">Welcome to</p>
          <p className="text-6xl">VIT Ride</p>
          <div className="mt-4">
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
        </div>
        <div>
          <Image
            src="/images/backimg.jpeg"
            alt="ride image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
