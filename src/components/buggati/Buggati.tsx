import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Buggati({
  className,
  x,
  y,
  rotation,
}: {
  className?: string;
  x: number;
  y: number;
  rotation: number;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src="/buggati-cropped.svg"
      alt="Divert Marketing Buggati"
      width={100}
      height={50}
      onLoad={() => setLoaded(true)}
      className={cn(className)}
      style={{
        position: "absolute",
        top: `${(y / 964) * 1550}px`,
        left: `${(x / 854) * 100}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    />
  );
}
