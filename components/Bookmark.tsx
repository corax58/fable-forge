"use client";
import { addToBookmarks } from "@/actions/addToBookmark";
import { removeFromBookmark } from "@/actions/removerFromBookmark";
import { BookmarkIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  storyId: string;
  userId: string;
  IsBookMarked?: boolean;
}
const BookMark = ({ storyId, userId, IsBookMarked }: Props) => {
  const [isChecked, setIsChecked] = useState(IsBookMarked);

  return (
    <BookmarkIcon
      onClick={(even: React.MouseEvent) => {
        if (isChecked) {
          removeFromBookmark(userId, storyId);
          setIsChecked(false);
        } else {
          addToBookmarks(userId, storyId);
          setIsChecked(true);
        }
      }}
      fill={isChecked ? "red" : "white"}
      strokeWidth={isChecked ? 0 : 2}
      className="size-8 cursor-pointer"
    />
  );
};

export default BookMark;
