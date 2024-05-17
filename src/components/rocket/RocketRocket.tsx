"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getYValue } from "./functions/getYValue";
import { getXValue } from "./functions/getXValue";
import RocketPath from "./RocketPath";
import RocketPathMobile from "./RocketPathMobile";

export default function RocketRocket() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 90%"],
  });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [p, setP] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setY(getYValue(value, ref));
      setX(getXValue(value, ref));
      setP(value);
      console.log(value);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  const height = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div className="absolute inset-0 flex overflow-visible" ref={ref}>
      <RocketPath
        className="absolute -mt-[80px] hidden h-full min-h-full w-full max-w-full justify-center overflow-visible lg:flex"
        p={p}
      />
      <RocketPathMobile y={y} height={height} />
    </div>
  );
}
