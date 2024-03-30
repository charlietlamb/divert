import { Spotlight } from "../aceternity/Spotlight";
import { TracingBeam } from "../aceternity/TracingBeam";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroTop from "./HeroTop";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-8 px-8 pt-16">
      <Spotlight className=" -top-40 md:-top-20 md:left-60" fill="white" />
      <HeroTop />
      <HeroVideo />
    </div>
  );
}
