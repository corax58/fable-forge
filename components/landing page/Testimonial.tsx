import { Reviews } from "@/public/image";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full h-max relative">
      <div className="h-96  w-full  backdrop-brightness-[.3]  z-50 flex flex-col items-center  justify-center gap-5 ">
        <p className=" text-white text-2xl font-bold">
          What Adventurers Are Saying
        </p>
        <div className="flex items-center  p-5 h-60 gap-10 w-full">
          <ReviewCard
            text={
              "'This app is an absolute gem for anyone who loves storytelling! I spent hours exploring different paths, and no two adventures were the same. The ability to create and share my own stories is the cherry on top!'— Liam T"
            }
          />
          <ReviewCard text="I was blown away by how immersive and fun this app is! It feels like stepping into a storybook where you control the outcome. The design is sleek, and the community is super supportive. Can't recommend it enough!— Sophia R." />
          <ReviewCard text="This app is perfect for unleashing your imagination! The branching storylines and interactive elements keep me coming back for more. Plus, creating my own adventures is so intuitive and rewarding.— Ethan M." />
        </div>
        <Image
          src={Reviews}
          className="absolute -z-10 brightness-50"
          alt="review background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

const ReviewCard = ({ text }: { text: string }) => {
  return (
    <div className=" text-wrap bg-sky-950/30 backdrop-blur  text-white rounded-md text-center p-4  h-max">
      {text}
    </div>
  );
};

export default Testimonial;
