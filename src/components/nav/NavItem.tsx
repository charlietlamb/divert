import { Button } from "@/components/ui/button";

export default function NavItem({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Button variant="link" className="text-lg text-slate-100" onClick={onClick}>
      {children}
    </Button>
  );
}
