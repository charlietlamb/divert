import ClientDouble from "@/components/client/ClientDouble";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Journey from "@/components/journey/Journey";
import Reasons from "@/components/reasons/Reasons";
import Results from "@/components/results/Results";
import Rocket from "@/components/rocket/Rocket";
import Story from "@/components/story/Story";
import Team from "@/components/team/Team";
import Tech from "@/components/tech/Tech";
import Test from "@/components/test/Test";
import Upwork from "@/components/upwork/Upwork";

export default function Home() {
  return (
    // <TracingBeam>
    <div className="flex flex-col overflow-x-hidden" id="home">
      <Hero />
      <ClientDouble index={0} className="hidden md:flex" />
      <Reasons />
      <Journey />
      <ClientDouble index={2} className="hidden md:flex" />
      <Results />
      <Tech />
      <Rocket />
      {/* <Test /> */}
      {<Upwork />}
      <ClientDouble index={0} className="flex flex-col md:hidden" />
      <ClientDouble index={2} className="flex flex-col md:hidden" />
      {/* <Team /> */}
      <Story />
      <FAQ />
    </div>
    // </TracingBeam>
  );
}
