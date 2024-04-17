"use client";

import { cn } from "@/lib/utils";
import ButtonRound from "../buttons/ButtonRound";
import NavItem from "./NavItem";

export default function NavItems({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={cn("hidden gap-2 lg:flex", vertical && "flex flex-col gap-4")}
    >
      <NavItem>Home</NavItem>
      <NavItem>Case Studies</NavItem>
      <NavItem>Process & Thesis</NavItem>
      {/* <NavItem>Resources</NavItem> */}
      <ButtonRound
        className="text-lg"
        onClick={() => {
          const div = document.getElementById("calendar");
          if (div) div.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Book A Call
      </ButtonRound>
      <ButtonRound secondary className="text-lg">
        Request A Demo
      </ButtonRound>
    </div>
  );
}
