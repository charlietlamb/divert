import { motion } from "framer-motion";

export default function ResultsBox({
  title,
  text,
  svg,
  index,
}: {
  title: string;
  text: string;
  svg: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      className="relative flex flex-col gap-4 rounded-lg bg-slate-900 p-4 ring-4 ring-slate-900 ring-offset-2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.4, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative inline-block w-fit p-2">
        <h3 className="inline-block text-6xl font-bold text-slate-200">
          {title}
        </h3>
        {svg}
      </div>
      <p className="text-lg text-slate-400">{text}</p>
    </motion.div>
  );
}
