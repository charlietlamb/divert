import { TracingBeam } from "@/components/aceternity/TracingBeam";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Journey from "@/components/journey/Journey";
import Reasons from "@/components/reasons/Reasons";
import Results from "@/components/results/Results";
import Rocket from "@/components/rocket/Rocket";
import Tech from "@/components/tech/Tech";

export default function Home() {
  return (
    // <TracingBeam>
    <div className="flex flex-col">
      <Hero />
      <Reasons />
      <Journey />
      <Results />
      <Tech />
      <Rocket />
      <Footer />
    </div>
    // </TracingBeam>
  );
}
