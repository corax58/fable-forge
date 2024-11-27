import React, { PropsWithChildren } from "react";
import { GoArrowRight } from "react-icons/go";

interface Props {
  children: React.ReactNode; // This allows any valid React node as children
  colors: {
    primaryColor: string;
    secondaryColor: string;
  };
}

const NodeNavButton = ({ children, colors }: Props) => {
  return (
    <button
      className=" hover:scale-105 hover:shadow-md  transition-all border-2 rounded-full p-1  pl-4 space-x-2 flex items-center justify-center w-max h-max"
      style={{
        borderColor: colors.secondaryColor!,
        color: colors.secondaryColor!,
      }}
    >
      <p className=" font-semibold text-lg">{children}</p>
      <div
        className="  rounded-full p-px"
        style={{ backgroundColor: colors.secondaryColor! }}
      >
        <GoArrowRight
          size={30}
          className=" w-full h-full"
          style={{ color: colors.primaryColor! }}
        />
      </div>
    </button>
  );
};

export default NodeNavButton;
