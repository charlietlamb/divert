"use client";

import Line1 from "../custom/Squiggily";
import Squiggle1 from "../squiggle/Squiggle1";
import Squiggle2 from "../squiggle/Squiggle2";
import Underline from "../squiggle/Underline";
import Underline1 from "../squiggle/Underline1";
import Underline2 from "../squiggle/Underline2";
import Underline3 from "../squiggle/Underline3";
import Underline4 from "../squiggle/Underline4";
import { motion } from "framer-motion";
import HeroTopMain from "./main/HeroTopMain";
import HeroSubMain from "./main/HeroSubMain";
import HeroTopStart from "./start/HeroTopStart";
import HeroSubStart from "./start/HeroSubStart";

export default function HeroTop({ mode }: { mode: string | null }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ amount: "some" }}
    >
      {mode === null ? (
        <>
          <HeroTopMain />
          <HeroSubMain />
        </>
      ) : (
        <>
          <HeroTopStart />
          <HeroSubStart />
        </>
      )}
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
