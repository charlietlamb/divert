"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function RocketListItem({
  data,
  index,
  className,
}: {
  data: { title: string; text: string; icon: React.ReactNode };
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("flex w-[80%] gap-4 lg:w-[70%]", className)}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p className="font-bold text-slate-900">{data.icon}</p>
      <div className="flex flex-grow flex-col md:flex-grow-0">
        <h3 className="text-lg font-bold text-slate-900 md:text-2xl">
          {data.title}
        </h3>
        <p className="text-sm text-slate-700 md:min-w-[500px] md:text-lg">
          {data.text}
        </p>
      </div>
    </motion.div>
  );
}
