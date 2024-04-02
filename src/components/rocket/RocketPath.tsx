"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function RocketPath({
  className,
  p,
}: {
  className?: string;
  p: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(pathLength * p);
      setEndPoint({ x: point.x, y: point.y });
    }
  }, [p]);

  return (
    <svg
      viewBox="0 0 975 850"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Add w-full and h-full classes
      preserveAspectRatio="none" // Add preserveAspectRatio attribute
    >
      <path
        ref={pathRef}
        d="M30.7555 30.5584C58.2618 -52.3076 878.258 69.5426 945.453 89.3831C1162 153.323 30.7554 87.8696 30.7555 293.5C38.7571 426.495 792.67 221.441 792.67 405.588C792.67 532.213 506.5 522 271 522C152.5 522 140.681 644.811 58.262 642.5C-16.754 640.397 -16.754 590.5 58.262 590.5C320.818 590.5 278.444 675 541 675C711.5 675 907.64 651.988 792.67 768.5C693.5 869 194.291 845.5 58.262 845.5"
        stroke="black"
        strokeWidth="4"
      />
      <motion.path
        ref={pathRef}
        d="M30.7555 30.5584C58.2618 -52.3076 878.258 69.5426 945.453 89.3831C1162 153.323 30.7554 87.8696 30.7555 293.5C38.7571 426.495 792.67 221.441 792.67 405.588C792.67 532.213 506.5 522 271 522C152.5 522 140.681 644.811 58.262 642.5C-16.754 640.397 -16.754 590.5 58.262 590.5C320.818 590.5 278.444 675 541 675C711.5 675 907.64 651.988 792.67 768.5C693.5 869 194.291 845.5 58.262 845.5"
        // stroke="#ffffff"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: p }}
        className="stroke-amber-500"
      />
      <motion.circle
        cx={endPoint.x}
        cy={endPoint.y}
        r="10"
        className="fill-amber-500"
      />
    </svg>
  );
}
