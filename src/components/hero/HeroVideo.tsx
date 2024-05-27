"use client";

import { motion } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";

export default function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, x: -200 }}
      viewport={{ amount: "some" }}
      className="relative flex w-full justify-center overflow-hidden rounded-lg sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
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
      <Vimeo
        video="950759145"
        autoplay
        showTitle={false}
        showByline={false}
        showPortrait={false}
        responsive
        className="w-full rounded-lg"
        color="#e4e4e7"
        // controls={false}
        volume={1}
      />
    </motion.div>
  );
}
