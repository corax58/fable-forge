import { Feature_1, Feature_2, Feature_3 } from "@/public/image";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-full flex justify-between px-28 py-10 bg-slate-200">
      <FeatureCard
        featureTitle="Interactive Stories"
        featureText="Experience stories that respond to your choices."
        img={Feature_1}
      />
      <FeatureCard
        featureTitle="Endless Possibilities"
        featureText="Create or explore a variety of user-generated adventures."
        img={Feature_2}
      />
      <FeatureCard
        featureTitle="Shared Adventures"
        featureText="Share your stories and expand your imagination."
        img={Feature_3}
      />
    </div>
  );
};

export const FeatureCard = ({
  featureText,
  featureTitle,
  img,
}: {
  featureTitle: string;
  featureText: string;
  img: StaticImageData;
}) => {
  return (
    <div className="relative h-max w-max ">
      <div className="absolute h-full w-full  ">
        <div className="rounded-2xl hover:opacity-0 transition-all px-2 flex h-full w-full backdrop-brightness-[.3]  text-white flex-col items-center justify-center text-center">
          <p className=" text-lg font-semibold">{featureTitle}</p>
          <p className="font-light">{featureText}</p>
        </div>
      </div>
      <Image
        className=" rounded-2xl "
        src={img}
        alt="Feature image"
        width={300}
        height={286}
        quality={100}
      />
    </div>
  );
};

export default Features;
