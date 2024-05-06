import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white gap-4 flex flex-row w-11/12 items-center justify-between px-32 my-4 shadow-md">
      <div className=" flex gap-2 flex-col items-center">
        <div>© 2024 VitRide. All right reserved.</div>
        <div>
          <Image
            src="/images/logo.png"
            height={100}
            width={100}
            priority
            className="h-10 w-10"
            alt="logo"
          />
        </div>
        <div className="text-orange-400 flex flex-row gap-2">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-8 cursor-pointer font-extrabold">
        <p className="hover:text-orange-400">Features</p>
        <p className="hover:text-orange-400">Company</p>
        <p className="hover:text-orange-400">Legal</p>
        <p className="hover:text-orange-400">Something Great</p>
        <p className="hover:text-orange-400">Blog</p>
        <p className="hover:text-orange-400">Privacy policy</p>
        <p className="hover:text-orange-400">Another thing!</p>
        <p className="hover:text-orange-400">About us</p>
        <p className="hover:text-orange-400">Terms of Use</p>
        <p className="hover:text-orange-400">So many features</p>
        <p className="hover:text-orange-400">contact</p>
        <p className="hover:text-orange-400">cookie policy</p>
        <p className="hover:text-orange-400">Jobs</p>
      </div>
    </div>
  );
};

export default Footer;
