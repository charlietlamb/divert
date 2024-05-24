import React from "react";
import { ClientDataType, clientData } from "./clientData";
import Client from "./Client";
import { cn } from "@/lib/utils";

export default function ClientDouble({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  const data1: ClientDataType = clientData[index];
  const data2: ClientDataType = clientData[index + 1];
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-8 bg-slate-200 p-8 px-8 pt-16 text-slate-200 lg:grid-cols-2 lg:px-12 lg:pt-24",
        className,
      )}
    >
      <Client data={data1} />
      <Client data={data2} right />
    </div>
  );
}
