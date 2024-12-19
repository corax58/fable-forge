"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";

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
          <div
            onClick={() => open()}
            className=" px-4 py-1 rounded-md bg-black text-white cursor-pointer"
          >
            Upload Image
          </div>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadWidget;
