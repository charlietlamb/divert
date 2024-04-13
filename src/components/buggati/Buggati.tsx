import React from "react";
import Image from "next/image";

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
  return (
    <Image
      src="/buggati-cropped.svg"
      alt="Divert Marketing Buggati"
      width={100}
      height={50}
      className={className}
      style={{
        position: "absolute",
        top: `${(y / 964) * 100}%`,
        left: `${(x / 854) * 100}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    />
  );
}
