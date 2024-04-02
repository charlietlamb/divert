"use client";

import Line1 from "../custom/Squiggily";
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
        className="title-width title-size text-center font-bold text-slate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        We partner with E-Commerce brands to design high performing landing
        pages
      </motion.h2>
      <motion.h3
        className="title-width text-md text-center  font-medium text-slate-400 sm:text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We handle research, strategy, copywriting & development
      </motion.h3>
      <motion.div
        className="text-md relative text-center font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        You drive traffic with a higher{" "}
        <span className="relative">
          conversion
          <Line1 className="absolute right-1 top-0" />
        </span>{" "}
        rate
      </motion.div>
      <HeroTestimonials />
    </motion.div>
  );
}
