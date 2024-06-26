"use client";

import Line1 from "../custom/Squiggily";
import Squiggle1 from "../squiggle/Squiggle1";
import Squiggle2 from "../squiggle/Squiggle2";
import Underline from "../squiggle/Underline";
import Underline1 from "../squiggle/Underline1";
import Underline2 from "../squiggle/Underline2";
import Underline3 from "../squiggle/Underline3";
import Underline4 from "../squiggle/Underline4";
import HeroTestimonials from "./HeroTestimonials";
import { motion } from "framer-motion";

export default function HeroTop() {
  return (
    <motion.div
      className="flex flex-col items-center gap-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ amount: "some" }}
    >
      <motion.h2
        className="title-size-small relative text-center font-bold text-slate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        We help ecom companies <br />
        <span className="relative">
          <span className="relative z-10">
            <span className="relative z-10">triple</span>
            <Squiggle1 className="absolute bottom-0 left-0 w-full max-w-full" />
          </span>{" "}
        </span>{" "}
        their{" "}
        <span className="relative">
          <span className="relative z-40 hidden whitespace-nowrap md:inline-flex">
            average order value
          </span>
          <span className="relative z-40 inline-flex md:hidden">AOV</span>
          <Underline3 className="absolute -bottom-2 left-0 hidden w-full max-w-full lg:flex" />
          <Underline className="absolute -bottom-1 left-0 flex w-full max-w-full lg:hidden" />
        </span>{" "}
        and <br className="hidden md:flex" />{" "}
        <span className="relative">
          <span className="relative z-10">lower</span>
          <Squiggle2 className="absolute bottom-0 left-0 w-full max-w-full" />
        </span>{" "}
        their{" "}
        <span className="relative">
          <span className="relative z-10 hidden whitespace-nowrap md:inline-flex">
            cost per acquisition
          </span>
          <span className="relative z-10 inline-flex md:hidden">CPA</span>
          <Underline4 className="absolute -bottom-1 left-0 hidden w-full max-w-full lg:flex" />
          <Underline2 className="absolute bottom-0 left-0 flex w-full max-w-full lg:hidden" />
        </span>{" "}
        at scale
      </motion.h2>
      <motion.h3
        className="title-width text-md text-center  font-medium text-slate-400 sm:text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Without spending a{" "}
        <span className="relative">
          <span className="relative z-10">
            penny
            <Underline2 className="absolute bottom-0 left-0 w-full max-w-full" />
          </span>
        </span>{" "}
        on ads
      </motion.h3>
      {/* <motion.div
        className="text-md relative text-center font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        You drive traffic with a higher{" "}
        <span className="relative">
          conversion
          <Line1 className="absolute right-1 top-0 w-full" />
        </span>{" "}
        rate
      </motion.div> */}
    </motion.div>
  );
}
