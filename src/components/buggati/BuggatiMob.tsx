import React from "react";
import Image from "next/image";

export default function BuggatiMob({ style }: { style: React.CSSProperties }) {
  return (
    <Image
      src="/buggati-cropped.svg"
      alt="Divert Marketing Buggati"
      width={100}
      height={50}
      style={style}
      className="hidden md:flex lg:hidden"
    />
  );
}
