"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signing up with:", email, password);
  };

  const validatePassword = (password: any) => {
    return password.length >= 8;
  };
  const validateEmail = (email: string) => {
    const atIndex = email.lastIndexOf("@");
    if (atIndex === -1) return false;

    const domain = email.slice(atIndex);
    return domain === "@gmail.com";
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex justify-center items-center w-full mt-20">
        <div className="max-w-md w-full p-8 bg-slate-100 rounded shadow-lg">
          <h2 className="text-2xl mb-4">Sign Up</h2>
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
          <div className="mb-4">
            <label className="block mb-2">Confirm password:</label>
            <input
              className="border rounded w-full py-2 px-3"
              type="password"
              value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {!validatePassword(password) && (
            <p className="text-red-500 mb-4">
              Password must be at least 8 characters long.
            </p>
          )}
          <button
            className={`bg-gray-200 hover:bg-orange-400 hover:text-white text-black font-bold py-2 px-4 rounded w-full ${
              !validatePassword(password) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSignUp}
            disabled={!validatePassword(password)}
          >
            Sign Up
          </button>
          <div className="mt-2 flex justify-center gap-1 border-l-0">
            <span>Already have an account?</span>
            <Link
              href="/SignIn"
              className="hover:text-blue-700 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
