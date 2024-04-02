import { mainClass } from "@/data/mainClass";
import { cn } from "@/lib/utils";
import RocketReveal from "./RocketReveal";
import RocketList from "./RocketList";
import RocketRocket from "./RocketRocket";

export default function Rocket() {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-8 bg-slate-200",
        mainClass,
      )}
    >
      <p className="title-width font-semibold text-blue-700">
        This is our process.
      </p>
      <RocketReveal />
      <div className="relative flex gap-4">
        <RocketList />
        <RocketRocket />
      </div>
    </div>
  );
}
