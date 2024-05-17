import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavItems from "./NavItems";
import { useState } from "react";

export default function NavToggle() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="toggle">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-slate-700 bg-slate-900">
        <NavItems vertical onClick={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
