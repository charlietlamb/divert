import Marquee from "react-fast-marquee";
import TechLogos from "./TechLogos";
import { motion } from "framer-motion";
export default function TechCarousel() {
  return (
    <motion.div
      className="relative flex w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex w-full lg:hidden">
        <Marquee>
          <TechLogos />
        </Marquee>
      </div>
      <div className="hidden w-full justify-center lg:flex">
        <TechLogos />
      </div>
      <div className="absolute inset-0 z-10 flex bg-gradient-to-r from-slate-900 via-transparent to-slate-900 lg:hidden"></div>
    </motion.div>
  );
}
