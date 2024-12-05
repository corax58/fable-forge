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
          <Button onClick={() => open()} className=" btn">
            Upload Image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadWidget;
