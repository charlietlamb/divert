import React from "react";
import { rocketWords } from "./data/rocketWords";
import { TypewriterEffectSmooth } from "../aceternity/TypewriterEffect";

export default function RocketReveal() {
  return (
    <TypewriterEffectSmooth words={rocketWords} className="text-slate-900" />
  );
}
