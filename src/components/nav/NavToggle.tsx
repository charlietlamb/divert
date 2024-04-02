import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavItems from "./NavItems";

export default function NavToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="toggle">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-slate-700 bg-slate-900">
        <NavItems vertical />
      </SheetContent>
    </Sheet>
  );
}
