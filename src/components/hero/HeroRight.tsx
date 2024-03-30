import HeroRightCards from "./HeroRightCards";
import TextReveal from "./TextReveal";

export default function HeroRight() {
  return (
    <div className="flex flex-col gap-y-4">
      <TextReveal />
      <HeroRightCards />
    </div>
  );
}
