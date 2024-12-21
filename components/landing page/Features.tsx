import { Feature_1, Feature_2, Feature_3 } from "@/public/image";
import Image, { StaticImageData } from "next/image";

const Features = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  items-center gap-5 md:justify-between px-5 xl:px-28 py-10 bg-slate-300 md:bg-slate-200">
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
      <div className="absolute h-full w-full  z-10 ">
        <div className="rounded-2xl hover:opacity-0 transition-all px-2 flex h-full w-full backdrop-brightness-[.3]  text-white flex-col items-center justify-center text-center">
          <p className=" text-lg font-semibold">{featureTitle}</p>
          <p className="font-light">{featureText}</p>
        </div>
      </div>
      <div className="retalive  overflow-hidden w-72 h-[450px]  md:w-56  md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[450px] -z-10"></div>
      <Image
        src={img}
        className="rounded-2xl object-cover "
        alt="Feature image"
        fill
        quality={100}
      />
    </div>
  );
};

export default Features;
