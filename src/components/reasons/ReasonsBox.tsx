import { motion } from "framer-motion";
import React from "react";

export default function ReasonsBox({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative flex flex-col gap-4 rounded-lg bg-slate-900 p-4 ring-4 ring-slate-900 ring-offset-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.4, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex h-full flex-col gap-4">
        <h3 className="inline-block text-2xl font-bold text-slate-200">
          {title.split("|").map((part, index) => (
            <React.Fragment key={index}>
              {part}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <div className="relative flex h-full w-fit items-center gap-4 p-2">
          <span className="text-8xl font-black text-slate-200">
            {index + 1}
          </span>

          <p className="text-sm text-slate-400">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
