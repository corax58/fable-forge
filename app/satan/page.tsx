"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  searchParams: {
    count: string;
  };
}
const Satan = ({ searchParams: {} }: Props) => {
  const [count, setCount] = useState(0);
};

export default Satan;
