"use client";

import Link from "next/link";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Signing in with:", email, password);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />
      <div className="flex justify-center items-center mt-20 w-full">
        <div className="max-w-md w-full p-6  rounded shadow-lg h-280 bg-white">
          <h2 className="text-2xl mb-4 text-orange-400">Sign In</h2>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              className="border rounded w-full py-2 px-3"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password:</label>
            <input
              className="border rounded w-full py-2 px-3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-customGreen hover:bg-orange-400 text-black font-bold py-2 px-4 rounded w-full bg-gray-200 hover:text-white transition-all"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <Link href="/ForgotPassword">
            <span className="flex items-center justify-center mt-2 cursor-pointer hover:underline hover:text-orange-400 text-black">
              Forgot Password?
            </span>
          </Link>

          <div className="flex items-center justify-center">
            <div className="flex-grow border-b border-gray-300 mr-4"></div>
            <span className="text-gray-500">or</span>
            <div className="flex-grow border-b border-gray-300 ml-4"></div>
          </div>

          <div className="flex items-center justify-center py-3 gap-1">
            Don&apos;t have an account?{" "}
            <Link href="/SignUp">
              <span className="text-black hover:transition  hover:text-orange-400 duration-300 ease-in-out border-b-2 border-transparent hover:underline">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
