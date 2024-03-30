import { Button } from "@/components/ui/button";

export default function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <Button variant="link" className="text-lg text-slate-100">
      {children}
    </Button>
  );
}
