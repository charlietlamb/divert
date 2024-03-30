import { cn } from "@/lib/utils";
import ResultsBox from "./ResultsBox";
import { boxData } from "./data/boxData";
import { mainClass } from "@/data/mainClass";

export default function Results() {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-8 bg-slate-200 px-12 py-24 text-slate-900",
        mainClass,
      )}
    >
      <div className="flex w-full flex-col items-center">
        <span className="text-lg font-semibold text-blue-700">
          It works, too
        </span>
        <h2 className="max-w-[50%] text-center text-6xl font-bold">
          As you can see for yourself, we get results!
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {boxData.map((box, i) => (
          <ResultsBox key={i} {...box} />
        ))}
      </div>
      <p className="text-sm text-slate-600">
        Early customer data, results may vary.*
      </p>
    </div>
  );
}
