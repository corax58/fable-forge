"use client";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

interface Props {
  handleColor: (color: string, isPrimary: boolean) => void;
  isPrimary: boolean;
  label: string;
  defaultColor?: string;
}
const ColorPicker = ({
  handleColor,
  isPrimary,
  label,
  defaultColor,
}: Props) => {
  const [color, setColor] = useState(defaultColor);

  return (
    <div className="relative">
      <div className="flex space-x-2 items-center">
        <p className=" ">{label}</p>
        <div className="h-10 w-20 p-2 border rounded group relative ">
          <div
            className="h-full w-full rounded-sm relative  border"
            style={{ backgroundColor: color }}
          ></div>
          <div className="absolute z-50 scale-0 group-hover:scale-100 top-0 left-0 mt-12  ml-[-4rem] transition-all origin-top-left">
            <HexColorPicker
              className="z-50"
              color={color}
              onChange={(value) => {
                handleColor(value, isPrimary);
                setColor(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
