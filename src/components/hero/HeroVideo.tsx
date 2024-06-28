"use client";

import { motion } from "framer-motion";
import MuxPlayer from "@mux/mux-player-react";

export default function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, x: -200 }}
      viewport={{ amount: "some" }}
      className="relative flex w-full justify-center overflow-hidden rounded-lg sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]"
    >
      {/* <Vimeo
        video="950759145"
        autoplay
        showTitle={false}
        showByline={false}
        showPortrait={false}
        responsive
        className="relative z-10 w-full min-w-full rounded-lg"
        color="#e4e4e7"
        // controls={false}
        background={false}
        volume={1}
      /> */}
      <MuxPlayer
        streamType="on-demand"
        playbackId="pNnVdHi6tbMQgCFI3BimkTpvHPTlvHogEkL801llTQU00"
        metadataVideoTitle="Placeholder (optional)"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="#e4e4e7"
        secondaryColor="#0F172A"
        autoPlay
        className="relative z-10 w-full min-w-full rounded-lg"
        style={{ "--media-accent-color": "#3B82F6" } as React.CSSProperties}
        minResolution="480p"
      />
      {/* <ReactPlayer
        url="https://vimeo.com/950759145"
        playing
        controls
        config={{}}
        width="100%"
        height="auto"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          flexGrow: 1,
        }}
      /> */}
      {/* <div className="absolute inset-0">
        <Image
          src="/thumbnail.jpg"
          alt="Divert Marketing Thumbnail"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full min-w-full"
        ></Image>
      </div> */}
    </motion.div>
  );
}
