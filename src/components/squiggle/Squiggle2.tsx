import React from "react";

export default function Squiggle2({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className={className}
    >
      <path
        d="M17.040359497070312,380.2690734863281C97.75785064697266,375.4858144124349,488.6397755940755,350.0747528076172,501.3453063964844,351.56951904296875C514.0508371988932,353.0642852783203,48.13154093424479,386.0986582438151,93.27354431152344,389.2376708984375C138.4155476888021,392.3766835530599,659.0433629353842,373.5426076253255,772.1973266601562,370.4035949707031"
        fill="none"
        stroke-width="9"
        stroke='url("#SvgjsLinearGradient1001")'
        stroke-linecap="round"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1001">
          <stop stop-color="#3b82f6" offset="0"></stop>
          <stop stop-color="hsl(224.3,76.3%,48%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
