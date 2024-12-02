"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  searchParams: {
    count: string;
  };
}
const Satan = () => {
  return (
    <div className="prose">
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>;
    </div>
  );
};

export default Satan;
