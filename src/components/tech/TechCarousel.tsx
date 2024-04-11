import Marquee from "react-fast-marquee";
import TechLogos from "./TechLogos";
export default function TechCarousel() {
  return (
    <div className="relative flex w-full">
      <div className="flex w-full lg:hidden">
        <Marquee>
          <TechLogos />
        </Marquee>
      </div>
      <div className="hidden w-full justify-center lg:flex">
        <TechLogos />
      </div>
      <div className="absolute inset-0 z-10 flex bg-gradient-to-r from-slate-900 via-transparent to-slate-900 lg:hidden"></div>
    </div>
  );
}
