import { Check } from "lucide-react";
import React from "react";
import { TestDataType } from "./data/TestDataType";
import { cn } from "@/lib/utils";

export default function SlideText({ data }: { data: TestDataType }) {
  const textClass = "text-slate-300 text-lg";
  return (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-5xl font-semibold">{data.title}</h3>
      <p className={textClass}>{data.intro}</p>
      <div className="w-full">
        <h4 className="text-2xl font-semibold">Problem</h4>
        <div className={cn("flex flex-col gap-4", textClass)}>
          {data.problem.split("|").map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h4 className="text-2xl font-semibold">Solution</h4>
        <p className={textClass}>{data.solution}</p>
      </div>
      {/* <div className="w-full">
        <h4 className="text-2xl font-semibold">Results</h4>
        <div className="flex gap-2">
          {data.results.map((result: string, index: number) => (
            <div className="flex items-center gap-2" key={index}>
              <div className=" flex max-h-8 min-h-8 min-w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                <Check className="h-6 w-6 text-slate-900" />
              </div>
              <p className={cn(textClass, "leading-none")}>{data.solution}</p>
            </div>
          ))}
        </div>
      </div> */}
      {data.component}
    </div>
  );
}
