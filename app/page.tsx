"use client";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <div className="space-y-10">
        <div className="relative space-x-3 flex place-content-center place-items-center w-screen h-screen">
          <Image
            src="/icons/whobidly-icon.svg"
            alt="WhoBidly Logo"
            height={40}
            width={40}
            objectFit="contain"
          />
          <h1 className="text-3xl font-semibold">Coming Soon</h1>
        </div>
      </div>
    </>
  );
}
