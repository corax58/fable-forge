"use client";
import { addToBookmarks } from "@/actions/addToBookmark";
import { removeFromBookmark } from "@/actions/removerFromBookmark";
import { BookmarkIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  storyId: string;
  userId: string;
}
const BookMark = ({ storyId, userId }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BookmarkIcon
      onClick={(even: React.MouseEvent) => {
        if (isChecked) {
          removeFromBookmark(userId, storyId);
        } else {
          addToBookmarks(userId, storyId);
        }
      }}
      fill={isChecked ? "red" : "white"}
      strokeWidth={isChecked ? 0 : 2}
    />
  );
};

export default BookMark;
