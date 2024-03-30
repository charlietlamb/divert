export default function ResultsBox({
  title,
  text,
  svg,
}: {
  title: string;
  text: string;
  svg: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col gap-4 rounded-lg bg-slate-900 p-4 ring-4 ring-slate-900 ring-offset-2">
      <div className="relative inline-block w-fit p-2">
        <h3 className="inline-block text-6xl font-bold text-slate-200">
          {title}
        </h3>
        {svg}
      </div>
      <p className="text-lg text-slate-400">{text}</p>
    </div>
  );
}
