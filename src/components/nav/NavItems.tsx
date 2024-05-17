"use client";

import { cn } from "@/lib/utils";
import ButtonRound from "../buttons/ButtonRound";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavItems({
  vertical = false,
  onClick = () => {},
}: {
  vertical?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className={cn(
        "hidden items-center gap-2 lg:flex",
        vertical && "flex flex-col gap-4",
      )}
    >
      <NavItem
        onClick={() => {
          if (pathname === "/") {
            const div = document.getElementById("home");
            if (div) div.scrollIntoView({ behavior: "smooth" });
            if (vertical) onClick();
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
            const div = document.getElementById("process");
            if (div) div.scrollIntoView({ behavior: "smooth" });
            if (vertical) onClick();
          } else {
            router.push("/");
          }
        }}
      >
        Process & Thesis
      </NavItem>
      <NavItem
        onClick={() => {
          if (pathname === "/") {
            const div = document.getElementById("case-studies");
            if (div) div.scrollIntoView({ behavior: "smooth" });
            if (vertical) onClick();
          } else {
            router.push("/");
          }
        }}
      >
        Case Studies
      </NavItem>
      <ButtonRound
        className="text-lg"
        onClick={() => {
          if (pathname === "/") {
            const div = document.getElementById("calendar");
            if (div) div.scrollIntoView({ behavior: "smooth" });
            if (vertical) onClick();
          } else {
            router.push("/");
          }
        }}
      >
        Book Your Scale Session
      </ButtonRound>
      {/* <ButtonRound secondary className="text-lg">
        Request A Demo
      </ButtonRound> */}
    </div>
  );
}
