import { cn } from "@/lib/utils";
import { Spotlight } from "../aceternity/Spotlight";
import HeroTop from "./HeroTop";
import HeroVideo from "./HeroVideo";
import { mainClass } from "@/data/mainClass";
import Calendar from "../calendar/Calendar";
import HeroTestimonials from "./HeroTestimonials";

export default function Hero({ mode = null }: { mode?: string | null }) {
  return (
    <>
      <div
        className={cn(
          "relative flex w-full flex-col items-center justify-center gap-8 bg-grid-white/[0.05]",
        )}
      >
        <Spotlight
          className="-top-40 left-[50%] md:-top-20 md:left-60"
          fill="white"
        />
        <div
          className={cn(
            "relative flex w-full flex-col items-center justify-center gap-8",
            mainClass,
          )}
        >
          <HeroTop mode={mode} />
          <HeroVideo />
          <HeroTestimonials />
        </div>
        <Calendar />
      </div>
    </>
  );
}
