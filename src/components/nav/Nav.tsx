import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import ButtonRound from "../buttons/ButtonRound";
import Divert from "../divert/Divert";
import Link from "next/link";
import NavToggle from "./NavToggle";
import NavItems from "./NavItems";

export default function Nav() {
  return (
    <menu className="relative z-50 flex w-full justify-between bg-slate-900 px-6 py-4">
      <Link href="/">
        <Divert
          className="max-h-12 min-h-12 min-w-12 max-w-12 text-slate-200"
          fill="#e2e8f0"
        />
      </Link>
      <NavItems />
      <NavToggle />
    </menu>
  );
}
