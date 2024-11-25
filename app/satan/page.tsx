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
  return (
    <div className=" flex flex-col">
      <div className=" flex gap-5">
        {/* <Link href={`/satan?count=${parseInt(count) + 1}`}>
        </Link>
        <Link href={`/satan?count=${parseInt(count) - 1}`}>
        </Link> */}
        <Button onClick={() => setCount(count + 1)}>Increase</Button>
        <Button onClick={() => setCount(count - 1)}>Decrease</Button>
      </div>
      <div>
        <p className=" text-7xl">{count}</p>
      </div>
    </div>
  );
};

export default Satan;
