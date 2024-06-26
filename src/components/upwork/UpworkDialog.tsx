import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { TestDataType } from "../test/data/TestDataType";
import Image from "next/image";
import { UpworkDataType } from "./data/UpworkDataType";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function UpworkDialog({ data }: { data: UpworkDataType }) {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className="justify-left group relative flex aspect-square w-full cursor-pointer flex-col items-center gap-2 overflow-hidden rounded-md border-2 border-slate-200 transition hover:border-slate-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={data.images[0].url}
            alt={data.title + " image"}
            layout="fill"
            objectFit="cover"
            objectPosition={data.thumbnailPosition || "center"}
          />
          <div className="absolute inset-0 hidden bg-black/50 transition group-hover:flex" />
          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 text-center text-xl font-medium text-white transition group-hover:flex">
            <h4 className="">{data.title}</h4>
            {typeof data.link === "string" && (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(data.link);
                }}
                variant="slate_primary"
                className="border-slate-200 bg-slate-100"
              >
                View Site
              </Button>
            )}
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] max-w-[80%] flex-col overflow-hidden overflow-y-auto bg-slate-950">
        <div className="flex flex-col gap-4 overflow-y-auto rounded-lg p-4">
          <DialogTitle className="title-size">{data.title}</DialogTitle>
          <div className="h-px min-h-px w-full rounded-full bg-slate-700" />
          <div
            className={cn(
              "grid grid-cols-1 gap-2 md:grid-cols-2",
              data.col && "md:grid-cols-1",
            )}
          >
            {data.images.map((image, index) => (
              <div
                className={cn(
                  "flex h-auto flex-col justify-between gap-2",
                  data.col && "mx-auto w-full md:w-[50%]",
                )}
                key={index}
              >
                <Image
                  src={image.url}
                  alt={data.title + " image"}
                  layout="responsive"
                  width={1024}
                  height={1024}
                  className="rounded-md border-2 border-slate-200"
                />
                <h4 className="text-xl font-medium text-slate-300">
                  {image.title}
                </h4>
              </div>
            ))}
          </div>
          <div className="h-px min-h-px w-full rounded-full bg-slate-700" />
          {data.content.map((content, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h4 className="font-mediu text-4xl">{content.subheading}</h4>
              <p className="text-slate-400">{content.desc}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
