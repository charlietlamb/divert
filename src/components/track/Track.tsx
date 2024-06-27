"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import TrackContent from "./TrackContent";
import { Button } from "../ui/button";

export default function Track() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-200 px-12 py-24 text-slate-900",
        mainClass,
      )}
      id="track"
    >
      <motion.p
        className="title-width font-semibold text-blue-700"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Tracking System
      </motion.p>
      <motion.h2
        className="title-width title-size relative z-10 text-center text-6xl font-bold text-slate-900"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Never play the guessing game again
      </motion.h2>
      <TrackContent />
      <div className="flex gap-1 text-lg font-medium">
        Book your
        <p
          onClick={() => {
            const div = document.getElementById("calendar");
            if (div) div.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer underline"
        >
          Scale Session
        </p>
        to see our full tacking system.
      </div>
    </div>
  );
}
