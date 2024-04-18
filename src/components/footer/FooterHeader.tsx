import React from "react";

export default function FooterHeader({ text }: { text: string }) {
  return (
    <h4 className="w-full border-b border-zinc-700 pb-4 text-xl font-semibold">
      {text}
    </h4>
  );
}
