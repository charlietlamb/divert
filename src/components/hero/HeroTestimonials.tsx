import { Star } from "lucide-react";
import { AnimatedTooltip } from "../aceternity/AnimatedTooltip";
import { items } from "./data/items";

export default function HeroTestimonials() {
  return (
    <div className="flex items-center gap-x-8">
      <div className="flex">
        <AnimatedTooltip items={items} />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex">
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
          <Star fill="#FFD700" stroke="#FFD700" />
        </div>
        Excellent (24+ Reviews)
      </div>
    </div>
  );
}
