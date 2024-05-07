'use client'

import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { FaCashRegister, FaSignInAlt,FaBars,FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {


  const [isOpen,setIsOpen]=useState(false)

  const toggleNav=()=>setIsOpen(!isOpen)


  return (
    <nav className=" bg-white items-center w-11/12 mt-4 shadow-current">
      <div className="px-3 py-3 w-full flex flex-row justify-between items-center">
        <div className="flex items-center flex-row gap-2">
          <div>
            <ul>
              <li>
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    height={100}
                    width={100}
                    priority
                    className="h-10 w-10"
                    alt="logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <label className="text-orange-400">
            <Link href="/" className="hover:text-orange-600 hover:underline">
              VitRide
            </Link>
          </label>
        </div>

        <div className="flex items-center sm:hidden">
          <button onClick={toggleNav}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="flex flex-row gap-4 mr-4 items-center ">
          <div className="hover:underline hover:text-orange-400">
            <ul>
              <li>
                <Link href="/book-now">Book Now</Link>
              </li>
            </ul>
          </div>

          <div className="hover:underline hover:text-orange-400">
            <ul>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="hover:underline hover:text-orange-400">
            <ul>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <Button
              icon={FaSignInAlt}
              buttonName="Sign In"
              bgColor="bg-gray-200"
              textColor="text-black"
              link="/SignIn"
            />
          </div>
          <div>
            <Button
              icon={FaCashRegister}
              buttonName="Register"
              bgColor="bg-gray-200"
              textColor="text-black"
              link="/SignUp"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
