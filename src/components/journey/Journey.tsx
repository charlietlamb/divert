"use client";

import { cn } from "@/lib/utils";
import JourneyVector from "../custom/JourneyVector";
import { mainClass } from "@/data/mainClass";
import { motion } from "framer-motion";
import React from "react";

export default function Journey() {
  const text = `Reduce the number of clicks in your customer's journey by up to 70%!|Once you try landing pages from DIVERT, you'll never return to the old way`;
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 bg-slate-900 ",
        mainClass,
      )}
    >
      <motion.h4
        className="title-width text-center font-semibold text-blue-700 lg:text-lg"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        simplify the buying process and increase conversions
      </motion.h4>
      <motion.h2
        className="title-width title-size text-center text-6xl font-bold text-slate-200"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Here&apos;s why you should use DIVERT landing pages
      </motion.h2>
      <motion.p
        className="title-width text-center text-slate-400 lg:text-lg"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {text.split("|").map((part, index) => (
          <React.Fragment key={index}>
            {part}
            <br />
          </React.Fragment>
        ))}
      </motion.p>
      <JourneyVector className="w-full rounded-lg border-0 border-slate-700 p-4 hover:border-slate-200 sm:w-[90%] md:w-[80%] lg:w-[70%]" />
    </div>
  );
}
