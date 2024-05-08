import React from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div className="flex items-center flex-col">
      <Navbar />
      <div className="bg-gray-100  flex flex-col mt-20 w-full ">
        <header className="bg-white py-4 mb-8 w-full">
          <div className="container mx-auto  text-orange-500 text-center ">
            <h1 className="text-3xl font-semibold ">Our Services</h1>
            <p className="text-lg">Find the perfect ride for your journey!</p>
          </div>
        </header>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Quick Ride"
              description="Need a ride urgently? Our Quick Ride service ensures you get a ride in minutes."
              icon="🚗"
              btnName="Book Now"
            />
            <ServiceCard
              title="Luxury Ride"
              description="Arrive in style with our Luxury Ride service. Experience comfort and luxury at its best."
              icon="🎩"
              btnName="See Cars"
            />
            <ServiceCard
              title="Group Ride"
              description="Travel with friends or colleagues? Our Group Ride service offers spacious vehicles for group travel."
              icon="👥"
              btnName="Book Now"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex  justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default page;
