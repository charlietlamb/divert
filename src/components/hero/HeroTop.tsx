import Line1 from "../custom/Squiggily";
import HeroTestimonials from "./HeroTestimonials";

export default function HeroTop() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h2 className="max-w-[50%] text-center text-4xl font-bold text-slate-200">
        We partner with E-Commerce brands to design high performing landing
        pages
      </h2>
      <h3 className="max-w-[50%] text-center text-xl font-medium text-slate-400">
        We handle research, strategy, copywriting & development
      </h3>
      <div className="text-md relative font-bold">
        You drive traffic with a higher conversion rate
        <Line1 className="absolute -bottom-[30px] right-1 w-[33%]" />
      </div>
      <HeroTestimonials />
    </div>
  );
}
