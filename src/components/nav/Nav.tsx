import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import ButtonRound from "../buttons/ButtonRound";
import Divert from "../divert/Divert";
import Link from "next/link";

export default function Nav() {
  return (
    <menu className="relative flex w-full justify-between bg-slate-900 px-6 py-4">
      <Link href="/">
        <Divert
          className="max-h-12 min-h-12 min-w-12 max-w-12 text-slate-200"
          fill="#e2e8f0"
        />
      </Link>
      <div className="flex gap-x-2">
        <NavItem>Home</NavItem>
        <NavItem>Case Studies</NavItem>
        <NavItem>Process & Thesis</NavItem>
        <NavItem>Resources</NavItem>
        <ButtonRound className="text-lg">Book A Call</ButtonRound>
        <ButtonRound secondary className="text-lg">
          Request A Demo
        </ButtonRound>
      </div>
    </menu>
  );
}
