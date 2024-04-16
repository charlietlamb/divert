"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import Smudge from "../squiggle/Smudge";
import TechCarousel from "./TechCarousel";
import Underline from "../squiggle/Underline";
import { motion } from "framer-motion";

export default function Tech() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-900 px-12 py-24 text-slate-900",
        mainClass,
      )}
    >
      <motion.span
        className="text-lg font-semibold text-blue-700"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Only the best.
      </motion.span>
      <motion.h2
        className="title-width title-size relative z-10 text-center text-6xl font-bold text-slate-200"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span className="relative">
          Level up
          <Underline className="absolute bottom-0 left-0 w-full" />
        </span>{" "}
        with our technology stack
      </motion.h2>
      <TechCarousel />
    </div>
  );
}
