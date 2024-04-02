import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import Smudge from "../squiggle/Smudge";
import TechCarousel from "./TechCarousel";
import Underline from "../squiggle/Underline";

export default function Tech() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-900 px-12 py-24 text-slate-900",
        mainClass,
      )}
    >
      <span className="text-lg font-semibold text-blue-700">
        Only the best.
      </span>
      <h2 className="title-width title-size relative z-10 text-center text-6xl font-bold text-slate-200">
        <span className="relative">
          Level up
          <Underline className="absolute bottom-0 left-0 w-full" />
        </span>{" "}
        with our technology stack
      </h2>
      <TechCarousel />
    </div>
  );
}
