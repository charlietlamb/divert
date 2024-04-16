"use client";

import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

export default function Calendar() {
  return (
    <div className="relative w-full">
      <motion.h2
        className="text-center text-2xl font-bold uppercase  md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Book your scale session:
      </motion.h2>
      <div className="w-full">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <InlineWidget
            url={process.env.CALENDLY_URL || ""}
            styles={{
              zIndex: 10,
              position: "relative",
              height: "698px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          />
        </motion.div>
        <div className="absolute bottom-0 z-0 h-[50%] w-full bg-slate-200"></div>
      </div>
    </div>
  );
}
