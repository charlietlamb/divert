"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ResultsBox from "./ResultsBox";
import { boxData } from "./data/boxData";
import { mainClass } from "@/data/mainClass";

export default function Results() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-200 px-12 py-24 text-slate-900",
        mainClass,
      )}
    >
      <div className="flex w-full flex-col items-center">
        <motion.span
          className="text-lg font-semibold text-blue-700"
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          It works, too
        </motion.span>
        <motion.h2
          className="title-size title-width text-center font-bold"
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          As you can see for yourself, we get results!
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {boxData.map((box, i) => (
          <ResultsBox key={i} {...box} index={i} />
        ))}
      </div>
      <motion.p
        className="text-sm text-slate-600"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Early customer data, results may vary.*
      </motion.p>
    </div>
  );
}