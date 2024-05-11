"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const notify = () => toast.loading("Submitting the Form...");

  function onSubmit(data: FormData) {
    notify();
    sendEmail(data);
  }

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex items-center justify-center flex-col bg-slate-200 mt-24 w-full"
      >
        <div className="p-16 bg-white w-10/12 mt-3 shadow-inner">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-orange-400"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-orange-400 focus:shadow-md"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-orange-400"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-orange-400 focus:shadow-md"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-orange-400"
            >
              Your Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-orange-400 focus:shadow-md"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div className="w-full">
            <button className="hover:shadow-form rounded-md bg-slate-200 py-3 px-8 text-base font-semibold text-black  hover:text-orange-400 hover:underline">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer />
      <Toaster
        position="top-center"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "orange",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Contact;
