import React from "react";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full bg-slate-100 py-5 gap-3 lg:py-10 lg:gap-5">
      <p className=" ~text-xl/5xl font-bold">Start Your Adventure Today</p>
      <p className=" ~text-base/3xl font-light">
        Join a community of 10,000 storytellers!
      </p>
      <Button className=" rounded-full">Begin Your Journey</Button>
    </div>
  );
};

export default CallToAction;
