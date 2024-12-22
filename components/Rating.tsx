import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Rating = () => {
  return (
    <div className=" w-full flex flex-col items-start">
      <p className=" text-xl">Ratings</p>
      <div className=" flex w-full">
        <div className=" w-full  flex flex-col items-center justify-center gap-2">
          <div className=" text-6xl">4.3</div>
          <StarsBar percentage={4.3} />
        </div>
        <div className=" w-full ">
          <ReviewBar starNumber={5} percentage={0.4} />
          <ReviewBar starNumber={4} percentage={0.6} />
          <ReviewBar starNumber={3} percentage={0.3} />
          <ReviewBar starNumber={2} percentage={0.8} />
          <ReviewBar starNumber={1} percentage={0.1} />
        </div>
      </div>
    </div>
  );
};

const ReviewBar = ({
  percentage,
  starNumber,
}: {
  percentage: number;
  starNumber: number;
}) => {
  const percent = percentage * 100 + "%";

  return (
    <div className=" flex items-center gap-2">
      <p>{starNumber}</p>
      <div className=" w-full bg-gray-200 h-2 rounded-full">
        <div
          className={`h-full rounded-full bg-yellow-400 `}
          style={{
            width: percent,
          }}
        ></div>
      </div>
    </div>
  );
};

const StarsBar = ({ percentage }: { percentage: number }) => {
  const yellow = Math.floor(percentage);

  return (
    <div>
      <div className=" flex gap-1">
        {Array.from({ length: yellow }, (_, index) => (
          <LiaStarSolid className=" text-yellow-400" key={index} />
        ))}

        {Array.from({ length: 5 - yellow }, (_, index) => (
          <LiaStarSolid className=" text-gray-400" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
