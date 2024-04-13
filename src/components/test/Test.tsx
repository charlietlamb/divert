import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import TestCarousel from "./TestCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Test() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-900 px-12 py-24 text-slate-900",
        mainClass,
      )}
    >
      <h2 className="title-width title-size relative z-10 text-center text-6xl font-bold text-slate-200">
        Case Studies
      </h2>
      <TestCarousel />
    </div>
  );
}
