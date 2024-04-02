import { cn } from "@/lib/utils";

export default function RocketListItem({
  data,
  className,
}: {
  data: { title: string; text: string; icon: React.ReactNode };
  className?: string;
}) {
  return (
    <div className={cn("flex gap-4 lg:w-[70%]", className)}>
      <p className="text-6xl font-bold text-slate-900">{data.icon}</p>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900">{data.title}</h3>
        <p className="text-lg text-slate-700">{data.text}</p>
      </div>
    </div>
  );
}
