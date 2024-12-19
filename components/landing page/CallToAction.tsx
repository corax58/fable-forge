import React from "react";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full bg-slate-100 py-10 gap-5">
      <p className="text-6xl font-bold">Start Your Adventure Today</p>
      <p className=" text-xl">Join a community of 10,000 storytellers!</p>
      <Button className=" rounded-full">Begin Your Journey</Button>
    </div>
  );
};

export default CallToAction;
