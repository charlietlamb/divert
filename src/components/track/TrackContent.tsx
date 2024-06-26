import TrackItem from "./TrackItem";
import { trackData } from "./data/trackData";

export default function TrackContent() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {trackData.map((data) => (
        <TrackItem key={data.title} data={data} />
      ))}
    </div>
  );
}
