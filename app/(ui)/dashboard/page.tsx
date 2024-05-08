import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        Welcome to the Dashboard
      </div>
    </div>
  );
};

export default Dashboard;
