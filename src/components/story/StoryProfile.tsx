import Image from "next/image";

export default function StoryProfile() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-slate-100 md:h-32 md:w-32">
        <Image
          src={"/images/george-blue.jpg"}
          alt={"George Wall Divert Marketing"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-4xl font-semibold leading-none text-slate-200">
          George
        </h4>
        <h5 className="text-xl font-medium leading-none text-slate-400">
          Founder
        </h5>
      </div>
    </div>
  );
}
