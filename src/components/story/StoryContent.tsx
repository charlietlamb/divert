import StoryProfile from "./StoryProfile";
import StoryStats from "./StoryStats";
import StoryText from "./StoryText";

export default function StoryContent() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <StoryProfile />
        <StoryStats />
      </div>
      <StoryText />
    </div>
  );
}
