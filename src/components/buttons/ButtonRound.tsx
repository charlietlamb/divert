import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ButtonRound({
  secondary,
  className,
  children,
}: {
  secondary?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      className={cn(
        "rounded-xl border border-blue-800 text-blue-800 transition hover:bg-blue-800 hover:text-slate-900",
        secondary &&
          "border-blue-800 bg-blue-800 text-slate-900 hover:border-slate-200 hover:bg-slate-200 hover:text-slate-900",
        className,
      )}
    >
      {children}
    </Button>
  );
}
