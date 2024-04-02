import Marquee from "react-fast-marquee";
import TechLogos from "./TechLogos";
export default function TechCarousel() {
  return (
    <div className="relative flex w-full">
      <Marquee>
        <TechLogos />
      </Marquee>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
    </div>
  );
}
