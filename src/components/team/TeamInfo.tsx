import { AnimatedTooltip } from "../aceternity/AnimatedTooltip";
import { teamData } from "./data/teamData";

export default function TeamInfo() {
  return (
    <div className="flex flex-col gap-4 lg:w-[60%]">
      {" "}
      <div className="flex">
        <AnimatedTooltip items={teamData} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        </h3>
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui alias
          est consequatur esse accusamus voluptatum placeat illum cupiditate,
          maiores maxime in iste magni voluptatibus, dolor, autem repellendus
          aut. Sit?
        </p>
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui alias
          est consequatur esse accusamus voluptatum placeat illum cupiditate,
          maiores maxime in iste magni voluptatibus, dolor, autem repellendus
          aut. Sit?
        </p>
        <h3 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        </h3>
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui alias
          est consequatur esse accusamus voluptatum placeat illum cupiditate,
          maiores maxime in iste magni voluptatibus, dolor, autem repellendus
          aut. Sit?
        </p>
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui alias
          est consequatur esse accusamus voluptatum placeat illum cupiditate,
          maiores maxime in iste magni voluptatibus, dolor, autem repellendus
          aut. Sit?
        </p>
      </div>
    </div>
  );
}
