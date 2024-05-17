export default function StoryStats() {
  return (
    <div className="grid grid-cols-2 justify-center gap-4 sm:grid-cols-3">
      <div className="flex items-center justify-center gap-2 sm:justify-start lg:justify-center">
        <h4 className="text-6xl font-bold text-slate-100">5+</h4>
        <p className="text-slate-400">CRO Experts</p>
      </div>
      <div className="flex items-center justify-center gap-2 sm:justify-start lg:justify-center">
        <h4 className="text-6xl font-bold text-slate-100">3</h4>
        <p className="text-slate-400">Web Developers</p>
      </div>
      <div className="col-span-2 flex items-center justify-center gap-2 sm:col-span-1 sm:justify-start lg:justify-center">
        <h4 className="text-6xl font-bold text-slate-100">28+</h4>
        <p className="text-slate-400">Clients</p>
      </div>
    </div>
  );
}
