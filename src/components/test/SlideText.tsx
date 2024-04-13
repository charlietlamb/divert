import { TestDataType } from "./data/testData";

export default function SlideText({ data }: { data: TestDataType }) {
  const textClass = "text-slate-200 text-lg";
  return (
    <div className="p-4">
      <p className={textClass}>{data.intro}</p>
      <p className={textClass}>{data.problem}</p>
      <p className={textClass}>{data.solution}</p>
    </div>
  );
}
