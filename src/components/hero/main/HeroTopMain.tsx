import React from "react";
import { motion } from "framer-motion";
import Squiggle1 from "@/components/squiggle/Squiggle1";
import Underline3 from "@/components/squiggle/Underline3";
import Underline2 from "@/components/squiggle/Underline2";

export default function HeroTopMain() {
  return (
    <motion.h2
      className="title-size-small relative text-center font-bold text-slate-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      We help ecom brands get more <br />
      <span className="relative">
        <span className="relative z-10">
          <span className="relative z-10">sales</span>
          <Squiggle1 className="absolute bottom-0 left-0 w-full max-w-full" />
        </span>{" "}
      </span>{" "}
      and increase{" "}
      <span className="relative">
        <span className="relative z-40 hidden whitespace-nowrap md:inline-flex">
          average order value
        </span>
        <span className="relative z-40 inline-flex md:hidden">AOV</span>
        <Underline3 className="absolute -bottom-2 left-0 hidden w-full max-w-full lg:flex" />
        <Underline2 className="absolute -bottom-1 left-0 flex w-full max-w-full lg:hidden" />
      </span>{" "}
      {/* without <br className="hidden md:flex" />{" "}
        <span className="relative">
          <span className="relative z-10">spending</span>
          <Squiggle2 className="absolute bottom-0 left-0 w-full max-w-full" />
        </span>{" "}
        more{" "}
        <span className="relative">
          <span className="relative z-10 hidden whitespace-nowrap md:inline-flex">
            on ads.
          </span>
          <span className="relative z-10 inline-flex md:hidden">on ads.</span>
          <Underline4 className="absolute -bottom-1 left-0 hidden w-full max-w-full lg:flex" />
          <Underline2 className="absolute bottom-0 left-0 flex w-full max-w-full lg:hidden" />
        </span>{" "} */}
    </motion.h2>
  );
}
