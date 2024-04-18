"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import React from "react";
import Divert from "../divert/Divert";
import { Button } from "@/components/ui/button";
import FooterHeader from "./FooterHeader";
import { usePathname, useRouter } from "next/navigation";

export default function FooterTop() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "grid grid-cols-1 justify-around gap-8 bg-slate-900 text-slate-200 md:grid-cols-4",
        mainClass,
      )}
    >
      <div className="col-span-2 flex flex-col items-center">
        <FooterHeader text="Agency" />
        <div className="grid w-full grid-cols-1 py-4 md:grid-cols-2">
          <Button
            className="flex w-full justify-start px-0 text-lg text-zinc-200"
            variant="link"
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
          </Button>
          <Button
            className="flex w-full justify-start px-0 text-lg text-zinc-200"
            variant="link"
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
          </Button>
          <Button
            className="flex w-full justify-start px-0 text-lg text-zinc-200"
            variant="link"
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
          </Button>
          <Button
            className="flex w-full justify-start px-0 text-lg text-zinc-200"
            variant="link"
            onClick={() => {
              if (pathname === "/") {
                const div = document.getElementById("process");
                if (div) div.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
          >
            Process
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <FooterHeader text="Legal" />
        <div className="grid w-full grid-cols-1 py-4">
          <Button
            className="flex w-full justify-start px-0 text-lg text-zinc-200"
            variant="link"
            onClick={() => router.push("/privacy-policy")}
          >
            Privacy Policy
          </Button>
          <Button
            className="flex w-full justify-start px-0 text-lg text-zinc-200"
            variant="link"
            onClick={() => router.push("/terms-and-conditions")}
          >
            Terms & Conditions
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <FooterHeader text="Contact" />
        <Divert
          className="max-h-12 min-h-12 min-w-12 max-w-12 text-slate-200"
          fill="#e2e8f0"
        />
      </div>
    </div>
  );
}
