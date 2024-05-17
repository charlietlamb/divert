import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import BuggatiMob from "../buggati/BuggatiMob";

export default function RocketPathMobile({
  height,
  y,
}: {
  height: MotionValue<string>;
  y: number;
}) {
  return (
    <>
      <div className="absolute right-[10%] top-0 flex h-full w-1 bg-blue-500 lg:hidden" />
      <motion.div
        className="absolute bottom-0 right-[10%] flex w-1 bg-slate-900 lg:hidden" // Changed from top-0 to bottom-0
        style={{
          height,
        }}
      />
      <BuggatiMob
        style={{
          position: "absolute",
          transform: `translateY(${y}px) translateX(-28%) rotate(90deg)`,
          left: "calc(90% - 22px)",
          marginTop: "-5px",
        }}
      />
    </>
  );
}
