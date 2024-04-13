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
        "rounded-xl border border-blue-600 text-blue-600 transition hover:bg-blue-600 hover:text-slate-900",
        secondary &&
          "border-blue-600 bg-blue-600 text-slate-900 hover:border-slate-200 hover:bg-slate-200 hover:text-slate-900",
        className,
      )}
    >
      {children}
    </Button>
  );
}
