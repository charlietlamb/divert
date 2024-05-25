"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AnimatedTooltip } from "../aceternity/AnimatedTooltip";
import { items } from "./data/items";

export default function HeroTestimonials() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 gap-x-8 md:flex-row"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex">
        <AnimatedTooltip items={items} />
      </div>
      <div className="flex flex-col items-center gap-y-1 md:items-start">
        <div className="flex">
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
        </div>
        <span className="text-slate-200">Excellent (24+ Reviews)</span>
      </div>
    </motion.div>
  );
}
