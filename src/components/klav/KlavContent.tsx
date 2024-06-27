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
        <div className="flex items-center gap-1 pb-2 text-lg">
          <ArrowUp className="text-green-500" />
          automation <ArrowUp className="text-green-500" />
          personalization
        </div>
        <p className="text-md text-slate-300">
          We integrate Klaviyo into your site and then consult you 1:1 on the
          best practices.
        </p>
      </div>
    </div>
  );
}
