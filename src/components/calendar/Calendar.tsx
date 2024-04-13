"use client";

import { InlineWidget } from "react-calendly";

export default function Calendar() {
  return (
    <div className="relative w-full">
      <h2 className="text-center text-2xl font-bold uppercase  md:text-3xl lg:text-4xl">
        Book your scale session:
      </h2>
      <div className="relative">
        <InlineWidget
          url={process.env.CALENDLY_URL || ""}
          styles={{ zIndex: 10, position: "relative", height: "698px" }}
        />
        <div className="absolute bottom-0 z-0 h-[50%] w-full bg-slate-200"></div>
      </div>
    </div>
  );
}
