import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import { reasonsData } from "./data/reasonsData";
import ReasonsBox from "./ReasonsBox";
import Smudge from "../squiggle/Smudge";

export default function Reasons() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-200 px-12 py-24 text-slate-900",
        mainClass,
      )}
    >
      <h2 className="relative z-10 max-w-[50%] text-center text-6xl font-bold">
        4 Reasons why you should be using{" "}
        <span className="max-h-auto relative">
          DIVERT
          <Smudge
            className="absolute inset-0 w-[110%] -translate-y-1/3 opacity-80"
            style={{ zIndex: -10 }}
          />
        </span>{" "}
        to build landing pages
      </h2>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasonsData.map((reason, index) => (
          <ReasonsBox key={index} {...reason} index={index} />
        ))}
      </div>
    </div>
  );
}
