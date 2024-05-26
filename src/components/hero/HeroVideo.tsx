"use client";

import { motion } from "framer-motion";
import YouTube from "react-youtube";

export default function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, x: -200 }}
      viewport={{ amount: "some" }}
      className="relative flex justify-center overflow-hidden rounded-lg"
    >
      {/* <motion.video
        controls
        preload="none"
        className=" w-full rounded-md text-slate-200 sm:w-[70vw] md:w-[60vw] lg:w-[50vw]"
        src="vsl.mp4"
        poster="thumbnail.jpg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
      </motion.video> */}
      <YouTube
        videoId="_0iwqyK50J0"
        className="relative z-50 w-full rounded-md"
      />
    </motion.div>
  );
}
