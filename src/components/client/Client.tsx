"use client";

import { Quote } from "lucide-react";
import { ClientDataType } from "./clientData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Client({
  data,
  right = false,
}: {
  data: ClientDataType;
  right?: boolean;
}) {
  const text = data.text.split("|")[0];
  const blueText = data.text.split("|")[1];

  return (
    <motion.div
      className="flex flex-col gap-8 rounded-2xl bg-slate-900 p-8 ring-4 ring-slate-900 ring-offset-2 md:p-16"
      initial={{ opacity: 0, x: right ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-4">
        <Quote className="h-12 w-12 fill-slate-200/50 text-transparent" />
        <p>
          {text}
          <span className="text-blue-400">{blueText}</span>
        </p>
      </div>
      <div className="mt-auto flex gap-2">
        <div className="relative min-h-12 min-w-12 overflow-hidden rounded-full">
          <Image
            alt={data.name + " " + data.company}
            src={data.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-sm "
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{data.name}</p>
          <p className="text-sm text-slate-400">{data.company}</p>
        </div>
      </div>
    </motion.div>
  );
}
