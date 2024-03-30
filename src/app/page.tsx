import { TracingBeam } from "@/components/aceternity/TracingBeam";
import Hero from "@/components/hero/Hero";
import Journey from "@/components/journey/Journey";
import Nav from "@/components/nav/Nav";
import Reasons from "@/components/reasons/Reasons";
import Results from "@/components/results/Results";

export default function Home() {
  return (
    // <TracingBeam>
    <div className="flex flex-col pb-20">
      <Hero />
      <Reasons />
      <Journey />
      <Results />
    </div>
    // </TracingBeam>
  );
}
