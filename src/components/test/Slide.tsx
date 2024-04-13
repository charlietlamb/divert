import SlideImages from "./SlideImages";
import SlideText from "./SlideText";
import { TestDataType } from "./data/testData";

export default function Slide({ data }: { data: TestDataType }) {
  return (
    <div className="grid grid-cols-2">
      <SlideImages data={data} />
      <SlideText data={data} />
    </div>
  );
}
