"use client";

import { motion } from "framer-motion";
import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import { reasonsData } from "./data/reasonsData";
import ReasonsBox from "./ReasonsBox";
import Smudge from "../squiggle/Smudge";

export default function Reasons() {
  return (
    <motion.div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-200 px-12 py-24 text-slate-900",
        mainClass,
      )}
    >
      <motion.span
        className="text-lg font-semibold text-blue-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        We focus on conversions.
      </motion.span>
      <motion.h2
        className="title-width title-size relative z-10 text-center text-6xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        Why your current landing page does not{" "}
        <span className="max-h-auto relative">
          convert
          <Smudge
            className="absolute inset-0 w-[110%] -translate-y-1/3 opacity-80"
            style={{ zIndex: -10 }}
          />
        </span>
      </motion.h2>

      <motion.div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 xl:grid-cols-4">
        {reasonsData.map((reason, index) => (
          <ReasonsBox key={index} {...reason} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
