"use client";

import { cn } from "@/lib/utils";
import ButtonRound from "../buttons/ButtonRound";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavItems({ vertical = false }: { vertical?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className={cn("hidden gap-2 lg:flex", vertical && "flex flex-col gap-4")}
    >
      <NavItem
        onClick={() => {
          if (pathname === "/") {
            const div = document.getElementById("home");
            if (div) div.scrollIntoView({ behavior: "smooth" });
          } else {
            router.push("/");
          }
        }}
      >
        Home
      </NavItem>
      <NavItem
        onClick={() => {
          if (pathname === "/") {
            const div = document.getElementById("case-studies");
            if (div) div.scrollIntoView({ behavior: "smooth" });
          } else {
            router.push("/");
          }
        }}
      >
        Case Studies
      </NavItem>
      <NavItem
        onClick={() => {
          if (pathname === "/") {
            const div = document.getElementById("process");
            if (div) div.scrollIntoView({ behavior: "smooth" });
          } else {
            router.push("/");
          }
        }}
      >
        Process & Thesis
      </NavItem>
      {/* <NavItem>Resources</NavItem> */}
      <ButtonRound
        className="text-lg"
        onClick={() => {
          if (pathname === "/") {
            const div = document.getElementById("calendar");
            if (div) div.scrollIntoView({ behavior: "smooth" });
          } else {
            router.push("/");
          }
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
