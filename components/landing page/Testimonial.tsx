import { Reviews } from "@/public/image";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      text: '"This app is an absolute gem for anyone who loves storytelling! I spent hours exploring different paths, and no two adventures were the same. The ability to create and share my own stories is the cherry on top! — Liam T"',
    },
    {
      id: 2,
      text: '"I was blown away by how immersive and fun this app is! It feels like stepping into a storybook where you control the outcome. The design is sleek, and the community is super supportive. Can\'t recommend it enough! — Sophia R."',
    },
    {
      id: 3,
      text: '"This app is perfect for unleashing your imagination! The branching storylines and interactive elements keep me coming back for more. Plus, creating my own adventures is so intuitive and rewarding. — Ethan M."',
    },
    {
      id: 4,
      text: '"A fantastic platform for creative minds! The app\'s features make storytelling an effortless and enjoyable experience. The variety of user-generated content is astonishing! — Ava L."',
    },
    {
      id: 5,
      text: '"Absolutely brilliant! The seamless combination of creativity and interactivity makes this app stand out. It\'s a must-have for anyone who enjoys crafting or experiencing unique narratives. — Noah K."',
    },
  ];

  return (
    <div className="w-full h-max relative">
      <div className="h-96  w-full  backdrop-brightness-[.3]  z-50 flex flex-col items-center  justify-center gap-5 ">
        <p className=" text-white ~text-xl/2xl font-bold">
          What Adventurers Are Saying
        </p>
        <Marquee className=" gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.id} text={review.text} />
          ))}
        </Marquee>
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
    <div className=" text-wrap bg-sky-950/30 backdrop-blur  text-white rounded-md text-center p-4    w-72 m-5">
      {text}
    </div>
  );
};

export default Testimonial;
