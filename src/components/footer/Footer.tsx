import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import React from "react";

export default function Footer() {
  return (
    <div
      className={cn(
        "flex justify-around gap-4 bg-slate-900 text-slate-200",
        mainClass,
      )}
    >
      <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <menu className="w-full text-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </menu>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <menu className="w-full text-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </menu>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <menu className="w-full text-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </menu>
      </div>
    </div>
  );
}
