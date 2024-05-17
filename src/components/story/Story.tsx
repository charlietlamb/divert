"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import StoryContent from "./StoryContent";

export default function Story() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-900 px-12 py-24 text-slate-900",
        mainClass,
      )}
      id="case-studies"
    >
      <motion.p
        className="title-width font-semibold text-blue-700"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        How we got here.
      </motion.p>
      <motion.h2
        className="title-width title-size relative z-10 text-center text-6xl font-bold text-slate-200"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Story
      </motion.h2>
      <StoryContent />
    </div>
  );
}
