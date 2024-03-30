import { cn } from "@/lib/utils";
import JourneyVector from "../custom/JourneyVector";
import JourneyImage from "./JourneyImage";
import { mainClass } from "@/data/mainClass";

export default function Journey() {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 bg-slate-900 ",
        mainClass,
      )}
    >
      <h4 className="max-w-[70%] text-center text-lg font-semibold text-blue-700">
        simplify the buying process and increase conversions
      </h4>
      <h2 className="max-w-[70%] text-center text-6xl font-bold text-slate-200">
        Here&apos;s why you should use DIVERT landing pages
      </h2>
      <p className="max-w-[50%] text-center text-lg text-slate-400">
        Reduce the number of clicks in your customer&apos;s journey by up to
        70%! Once you try landing pages from DIVERT, you&apos;ll never return to
        the old way
      </p>
      <JourneyVector className="w-[70%] rounded-lg border-0 border-slate-700 bg-slate-900/50 p-4 hover:border-slate-200" />
    </div>
  );
}
