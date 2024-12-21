import { reviews } from "@/app/data";
import { Reviews } from "@/public/image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
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
