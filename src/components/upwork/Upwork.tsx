"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { testData } from "../test/data/testData";
import { TestDataType } from "../test/data/TestDataType";
import UpworkDialog from "./UpworkDialog";
import { upworkData } from "./data/upworkData";
import { UpworkDataType } from "./data/UpworkDataType";

export default function Upwork() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-900 px-12 py-24 text-slate-900",
        mainClass,
      )}
      id="case-studies"
    >
      <motion.p
        className="title-width font-semibold text-blue-700"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our previous work.
      </motion.p>
      <div className="flex w-full flex-col items-center gap-2">
        <motion.h2
          className="title-width title-size relative z-10 text-center text-6xl font-bold text-slate-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>
        <motion.p
          className="title-width font-medium text-blue-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          we also design, click ‘view website’ to see the site built from
          scratch
        </motion.p>
      </div>
      <motion.div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        {upworkData.map((data: UpworkDataType) => (
          <UpworkDialog data={data} key={data.title} />
        ))}
      </motion.div>
    </div>
  );
}
