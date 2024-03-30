export default function HeroVideo() {
  return (
    <video
      controls
      preload="none"
      className="w-[50vw] rounded-md text-zinc-200"
      src="msc2.mp4"
      poster="poster.png"
    >
      {/* <source src="msc2.mp4" type="video/mp4" /> */}
    </video>
  );
}
