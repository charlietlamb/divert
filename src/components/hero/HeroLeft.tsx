import { Spotlight } from "../aceternity/Spotlight";
import { Button } from "@/components/ui/button";

export default function HeroLeft() {
  return (
    <div className="flex flex-col gap-y-4">
      <Spotlight
        className="-left-20 -top-40 md:-top-20 md:left-60"
        fill="white"
      />
      <h1 className="text-6xl font-bold">Divert Marketing</h1>
      <p className="text-slate-400 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi
        neque quia dolorum doloremque aliquid, minima velit iste quidem fuga
        magni.
      </p>
      <div className="flex gap-x-2">
        <Button variant="slate_primary">Button Primary</Button>
        <Button variant="slate_secondary">Button Secondary</Button>
      </div>
    </div>
  );
}
