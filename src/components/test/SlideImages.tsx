import Image from "next/image";
import { TestDataType } from "./data/TestDataType";

export default function SlideImages({ data }: { data: TestDataType }) {
  return (
    <div className="relative h-fit p-8">
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
    </div>
  );
}
