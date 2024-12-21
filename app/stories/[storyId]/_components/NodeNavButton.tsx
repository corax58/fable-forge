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
      className=" break-words text-wrap hover:scale-105 hover:shadow-md  transition-all border-2 rounded-md md:rounded-full p-1  md:pl-4 space-x-2 flex items-center justify-center w-full h-max"
      style={{
        borderColor: colors.secondaryColor!,
        color: colors.secondaryColor!,
      }}
    >
      <p className=" font-semibold text-lg break-all w-full text-wrap">
        {children}
      </p>
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
