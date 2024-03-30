import { TracingBeam } from "@/components/aceternity/TracingBeam";
import Hero from "@/components/hero/Hero";
import Journey from "@/components/journey/Journey";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    // <TracingBeam>
    <div className="flex flex-col">
      <Hero />
      <Journey />
    </div>
    // </TracingBeam>
  );
}
