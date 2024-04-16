import SlideImages from "./SlideImages";
import SlideText from "./SlideText";
import { TestDataType } from "./data/TestDataType";

export default function Slide({ data }: { data: TestDataType }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SlideImages data={data} />
      <SlideText data={data} />
    </div>
  );
}
