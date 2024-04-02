import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiWebflow } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

export default function TechLogos() {
  const logoClassName = "min-w-12 min-h-12 text-slate-200";
  return (
    <div className="flex gap-4">
      <SiNextdotjs className={logoClassName} />
      <FaReact className={logoClassName} />
      <SiTailwindcss className={logoClassName} />
      <RiSupabaseFill className={logoClassName} />
      <FaMeta className={logoClassName} />
      <SiTypescript className={logoClassName} />
      <TbBrandFramerMotion className={logoClassName} />
      <SiWebflow className={logoClassName} />
      <FaFigma className={logoClassName} />
    </div>
  );
}
