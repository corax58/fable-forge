"use client";
import { BookmarkIcon } from "lucide-react";
import { useState } from "react";

const BookMark = ({ storyId }: { storyId: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BookmarkIcon
      onClick={(even: React.MouseEvent) => {
        even.stopPropagation();
        setIsChecked(!isChecked);
      }}
      fill={isChecked ? "red" : "white"}
      strokeWidth={isChecked ? 0 : 2}
    />
  );
};

export default BookMark;
