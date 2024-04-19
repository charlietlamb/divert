import Image from "next/image";
import { TestDataType } from "./data/TestDataType";
import { EyeOff } from "lucide-react";

export default function SlideImages({ data }: { data: TestDataType }) {
  const isHidden = data.image === "xxx";
  return (
    <div className="relative h-fit p-8">
      {!isHidden ? (
        <>
          {" "}
          <Image
            src={data.image}
            alt={data.imageAlt}
            width={800}
            height={800}
            className="relative z-10 h-full w-[90%] rounded-lg shadow-2xl shadow-black"
          />
          <div className="p-4">
            <Image
              src={data.mobileImage}
              alt={data.mobileAlt}
              width={800}
              height={800}
              className="absolute right-0 top-[10%] h-[80%] w-auto rounded-lg"
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative inset-0 z-10 flex aspect-video h-full w-[90%] items-center justify-center rounded-lg bg-slate-200 shadow-2xl shadow-black">
            <EyeOff className="h-12 w-12 text-slate-900" />
          </div>
          <div className="absolute right-0 top-[10%] flex  h-[80%] w-[20%] items-center justify-center rounded-lg bg-slate-200">
            <EyeOff className="h-12 w-12 text-slate-900" />
          </div>
        </>
      )}
    </div>
  );
}
