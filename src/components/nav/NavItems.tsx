import { cn } from "@/lib/utils";
import ButtonRound from "../buttons/ButtonRound";
import NavItem from "./NavItem";
import BookACallModal from "../modals/BookACallModal";

export default function NavItems({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={cn("hidden gap-2 lg:flex", vertical && "flex flex-col gap-4")}
    >
      <NavItem>Home</NavItem>
      <NavItem>Case Studies</NavItem>
      <NavItem>Process & Thesis</NavItem>
      {/* <NavItem>Resources</NavItem> */}
      <BookACallModal />
      <ButtonRound secondary className="text-lg">
        Request A Demo
      </ButtonRound>
    </div>
  );
}
