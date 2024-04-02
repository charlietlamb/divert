"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ amount: "some" }}
    >
      <motion.video
        controls
        preload="none"
        className=" w-full rounded-md text-slate-200 sm:w-[70vw] md:w-[60vw] lg:w-[50vw]"
        src="msc2.mp4"
        poster="poster.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {/* <source src="msc2.mp4" type="video/mp4" /> */}
      </motion.video>
    </motion.div>
  );
}
