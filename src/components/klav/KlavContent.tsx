import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function KlavContent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md bg-slate-200 p-4">
        <Image
          src="/images/klav.png"
          width={1024}
          height={1024}
          alt="Divert Marketing Klaviyo"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center gap-1 text-center text-slate-200">
        <div className="text-4xl font-bold">
          The Key To Post Purchase Marketing
        </div>
        <div className="flex gap-1 text-lg">
          <ArrowUp />
          automation <ArrowUp />
          personalization
        </div>
        <p className="text-md text-slate-300">
          We integrate klaviyo into your site and then consult you 1 on 1 on the
          best practices.
        </p>
      </div>
    </div>
  );
}
