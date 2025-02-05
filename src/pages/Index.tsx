
import React from "react";
import BrainNetwork from "../components/BrainNetwork";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BrainNetwork />
      <div className="container mx-auto py-8 px-4 relative z-10">
        <h1 className="text-2xl font-bold text-center text-white">Welcome</h1>
      </div>
    </div>
  );
};

export default Index;
