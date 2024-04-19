"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import TeamContent from "./TeamContent";

export default function Team() {
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Fast, professional, and thorough.
        </motion.span>
        <motion.h2
          className="title-size title-width text-center font-bold"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Divert Marketing Team
        </motion.h2>
      </div>
      <TeamContent />
    </div>
  );
}
