import React from "react";
import { motion } from "framer-motion";
import Underline2 from "@/components/squiggle/Underline2";

export default function HeroSubMain() {
  return (
    <motion.h3
      className="title-width text-md text-center  font-medium text-slate-400 sm:text-lg md:text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Without spending{" "}
      <span className="relative">
        <span className="relative z-10">
          more
          <Underline2 className="absolute bottom-0 left-0 w-full max-w-full" />
        </span>
      </span>{" "}
      on ads
    </motion.h3>
  );
}
