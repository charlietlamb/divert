import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import React from "react";
import Divert from "../divert/Divert";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div
      className={cn(
        "flex justify-around gap-4 bg-slate-900 text-slate-200",
        mainClass,
      )}
    >
      <div className="flex flex-col items-center">
        <Divert
          className="max-h-12 min-h-12 min-w-12 max-w-12 text-slate-200"
          fill="#e2e8f0"
        />
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-xl font-semibold">Quick Links</h4>
        <menu className="w-full">
          <li>
            <Button className="text-zinc-200" variant="link">
              Home
            </Button>
          </li>
          <li>
            <Button className="text-zinc-200" variant="link">
              About
            </Button>
          </li>
          <li>
            <Button className="text-zinc-200" variant="link">
              Contact
            </Button>
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
