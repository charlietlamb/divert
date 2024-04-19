import { CSSProperties } from "react";

export default function Smudge({
  className,
  style,
}: {
  className: string;
  style: CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 600 600"
      className={className}
      style={style}
    >
      <path
        d="M494.764404296875,213.61256408691406C439.0052426656087,177.74869028727213,170.28795687357587,157.19895680745444,95.81151580810547,186.1256561279297C21.335074742635086,215.05235544840494,-7.853403727213539,351.3088862101237,47.905757904052734,387.1727600097656C103.664919535319,423.03663380940753,355.89004453023273,430.23559824625653,430.3664855957031,401.30889892578125C504.8429266611735,372.38219960530597,550.5235659281412,249.476437886556,494.764404296875,213.61256408691406C439.0052426656087,177.74869028727213,170.28795687357587,157.19895680745444,95.81151580810547,186.1256561279297"
        fill="none"
        stroke='url("#SvgjsLinearGradient1000")'
        stroke-width="16"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1000">
          <stop stop-color="hsl(217.2,91.2%,59.8%)" offset="0"></stop>
          <stop stop-color="hsl(224.3,76.3%,48%)" offset="1"></stop>
        </linearGradient>
        <radialGradient id="SvgjsRadialGradient1001">
          <stop stop-color="hsl(340, 45%, 50%)" offset="0"></stop>
          <stop stop-color="hsl(340, 45%, 80%)" offset="1"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}
