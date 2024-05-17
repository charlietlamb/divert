"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Underline1 from "../squiggle/Underline1";
import { faqData } from "./data/faqData";
import { FaqDataType } from "./data/FaqDataType";

export default function FAQ() {
  const triggerClassName = "text-2xl font-bold text-slate-900 cursor-pointer";
  return (
    <div className="flex w-full flex-col items-center gap-8 bg-slate-200 px-12 py-24 text-slate-900">
      <motion.h2
        className="title-size title-width relative text-center font-bold"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Frequently asked{" "}
        <span className="relative z-10 inline-block">
          <Underline1 className="absolute -bottom-1 left-0 z-0" />
          <div className="relative z-10">questions</div>
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Accordion
          type="single"
          collapsible
          className="w-full divide-y divide-slate-900 border-slate-900"
        >
          {faqData.map((faq: FaqDataType, index: number) => (
            <AccordionItem value={`item-${index}`} key={faq.question}>
              <AccordionTrigger className={triggerClassName}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
