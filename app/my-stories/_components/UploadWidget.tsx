"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

interface Props {
  handleImage: (public_id: string) => void;
}

type info = {
  url: string;
};
const UploadWidget = ({ handleImage }: Props) => {
  return (
    <div>
      <CldUploadWidget
        uploadPreset="ptpm8vyj"
        onSuccess={(results) => {
          const info = results.info as info;
          handleImage(info.url);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className=" btn">
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadWidget;
