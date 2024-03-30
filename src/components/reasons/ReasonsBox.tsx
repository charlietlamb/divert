export default function ReasonsBox({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <div className="relative flex flex-col gap-4 rounded-lg bg-slate-900 p-4 ring-4 ring-slate-900 ring-offset-2">
      <div className="flex h-full items-center gap-4">
        <span className="text-8xl font-black text-slate-200">{index + 1}</span>
        <div className="relative inline-block w-fit gap-4 p-2">
          <h3 className="inline-block text-2xl font-bold text-slate-200">
            {title}
          </h3>
          <p className="text-sm text-slate-400">{text}</p>
        </div>
      </div>
    </div>
  );
}
