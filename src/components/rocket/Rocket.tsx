"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import RocketReveal from "./RocketReveal";
import RocketList from "./RocketList";
import RocketRocket from "./RocketRocket";
import { motion } from "framer-motion";

export default function Rocket() {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-4 bg-slate-200 lg:gap-24",
        mainClass,
      )}
      id="process"
    >
      <div className="flex w-full flex-col items-center">
        <motion.p
          className="title-width font-semibold text-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          This is our process.
        </motion.p>
        <RocketReveal />
      </div>
      <div className="relative flex gap-4 lg:mb-16 lg:mt-8">
        <RocketList />
        <RocketRocket />
      </div>
    </div>
  );
}
