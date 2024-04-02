import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";

export default function RocketPathMobile({
  height,
  y,
}: {
  height: MotionValue<string>;
  y: number;
}) {
  return (
    <>
      <div
        className="absolute right-[10%] top-0 flex h-full w-1 lg:hidden"
        style={{
          background: "blue", // Final color
        }}
      />
      <motion.div
        className="absolute bottom-0 right-[10%] flex w-1 lg:hidden" // Changed from top-0 to bottom-0
        style={{
          background: "red", // Initial color
          height,
        }}
      />
      <motion.div
        className="absolute flex h-10 w-10 rounded-full bg-red-500 lg:hidden"
        style={{ y, left: "calc(90% - 22px)", marginTop: "-5px" }} // Center ball
      />
    </>
  );
}
