import Image from "next/image";
import { TrackDataType } from "./data/trackData";

export default function TrackItem({ data }: { data: TrackDataType }) {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-2 rounded-md bg-slate-900 p-4 text-slate-200 ring-4 ring-slate-900 ring-offset-4 ring-offset-slate-200 md:items-start">
      <h3 className="text-3xl font-bold">{data.title}</h3>
      <Image
        src={data.image}
        alt={data.title}
        width={500}
        height={500}
        className="rounded-md"
      />
      <p className="">{data.text}</p>
    </div>
  );
}
