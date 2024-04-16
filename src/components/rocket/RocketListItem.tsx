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
      className={cn("flex w-full gap-4 md:w-[80%] lg:w-[70%]", className)}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p className="font-bold text-slate-900">{data.icon}</p>
      <div className="flex flex-grow flex-col md:flex-grow-0">
        <h3 className="text-2xl font-bold text-slate-900">{data.title}</h3>
        <p className="min-w-[500px] text-lg text-slate-700">{data.text}</p>
      </div>
    </motion.div>
  );
}
