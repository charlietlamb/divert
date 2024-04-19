import Image from "next/image";

export default function TeamTest() {
  return (
    <div className="flex flex-col gap-4 lg:w-[40%]">
      <h3 className="w-full text-center text-2xl font-semibold text-slate-900">
        Previously Worked With
      </h3>
      <div className="relative ">
        <Image
          src="/images/t-t.png"
          alt={"T Mobile Divert Marketing"}
          width={800}
          height={800}
          className="absolute inset-0"
        />
        <Image
          src="/images/t-desk.png"
          alt={"T Mobile Divert Marketing"}
          width={800}
          height={800}
          className="relative ml-auto h-full w-[50%] rounded-lg shadow-2xl shadow-black/20"
        />
        <Image
          src="/images/t-pink.jpeg"
          alt={"T Mobile Divert Marketing"}
          width={800}
          height={800}
          className="absolute bottom-0 right-1/2 ml-auto aspect-square w-[20%] translate-x-1/2 translate-y-1/2 rounded-lg shadow-2xl shadow-black/80"
        />
      </div>
    </div>
  );
}
