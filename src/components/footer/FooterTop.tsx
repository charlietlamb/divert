"use client";

import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import React from "react";
import Divert from "../divert/Divert";
import { Button } from "@/components/ui/button";
import FooterHeader from "./FooterHeader";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

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
      <div className="flex flex-col items-center md:col-span-2">
        <FooterHeader text="Agency" />
        <div className="grid w-full grid-cols-1 py-4 md:grid-cols-2">
          <Button
            className="flex w-full justify-start px-0 text-lg text-slate-200"
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
            className="flex w-full justify-start px-0 text-lg text-slate-200"
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
            Book Your Scale Session
          </Button>
          <Button
            className="flex w-full justify-start px-0 text-lg text-slate-200"
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
            className="flex w-full justify-start px-0 text-lg text-slate-200"
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
      {/* <div className="flex flex-col items-center">
        <FooterHeader text="Legal" />
        <div className="grid w-full grid-cols-1 py-4">
          <Button
            className="flex w-full justify-start px-0 text-lg text-slate-200"
            variant="link"
            onClick={() => router.push("/privacy-policy")}
          >
            Privacy Policy
          </Button>
          <Button
            className="flex w-full justify-start px-0 text-lg text-slate-200"
            variant="link"
            onClick={() => router.push("/terms-and-conditions")}
          >
            Terms & Conditions
          </Button>
        </div>
      </div> */}
      <div className="flex flex-col items-center md:col-span-2">
        <FooterHeader text="Contact" />
        <div className="flex w-full flex-col items-start gap-2 p-4 px-0">
          <Image
            width={512}
            height={512}
            src={"/images/divert-t-white.svg"}
            alt={"Divert logo"}
            className="w-48"
          />
          <p className="font-medium text-slate-100">
            enquires@divertmarketing.co.uk
          </p>
          {/* <p>Divert Marketing</p> */}
        </div>
      </div>
    </div>
  );
}
