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
    <div className=" relative z-10">
      <div className=" flex space-x-2 items-center">
        <p> {label}</p>
        <div className="h-10 w-20 p-2 border rounded group">
          <div
            className="h-full w-full rounded-sm border "
            style={{ backgroundColor: color }}
          ></div>
          <div className="scale-0 group-hover:scale-100 absolute  transition-all origin-top-left mt-4">
            <HexColorPicker
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
