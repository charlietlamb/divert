"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Buggati from "../buggati/Buggati";
import { cn } from "@/lib/utils";

export default function RocketPath({
  className,
  p,
}: {
  className?: string;
  p: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0, angle: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(pathLength * p);
      const nextPoint = pathRef.current.getPointAtLength(pathLength * p + 1);
      let angle =
        (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180) /
        Math.PI;
      if (p === 1) angle = 90;
      setEndPoint({ x: point.x, y: point.y, angle });
      console.log(point.x, point.y);
    }
  }, [p]);

  return (
    <div className={cn("relative", className)}>
      <Buggati x={endPoint.x} y={endPoint.y} rotation={endPoint.angle} />
      <svg
        viewBox="0 0 854 964"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[1550px] w-full"
        preserveAspectRatio="none"
        // preserveAspectRatio="xMidYMid meet" // Change preserveAspectRatio attribute
        // className="w-full"
      >
        {" "}
        {/* Add transform attribute */}
        <path
          ref={pathRef}
          d="M428.086 2V55L98.5 55C18 55 6.34227 86.5511 6.34227 138.117C6.34227 189.682 25.8825 208.82 94.2734 208.82C94.2734 208.82 690.25 207.757 758.641 207.757C827.032 207.757 852 210.947 852 277.397C852 343.848 792.837 352.353 758.641 352.353C724.446 352.353 153.98 352.353 94.2734 352.353C34.5672 352.353 6.34227 377.339 6.34227 426.246C6.34227 475.154 67.1342 493.229 94.2734 493.229C121.413 493.229 699.478 483.66 758.641 493.229C817.805 502.797 852 524.593 852 566.058C852 607.524 780.352 626.661 746.157 626.661C711.962 626.661 179.491 626.661 104.586 626.661C29.682 626.661 2.00001 642.078 2 698.428C1.99999 754.778 69.3052 765.942 104.586 765.942C139.867 765.942 758.641 765.942 758.641 765.942C821.5 765.942 852 784.503 852 826.5C852 868.497 821.5 895.5 766 895.5L373.807 895.5V961.5"
          stroke="black"
          strokeWidth="4"
        />
        <motion.path
          ref={pathRef}
          d="M428.086 2V55L98.5 55C18 55 6.34227 86.5511 6.34227 138.117C6.34227 189.682 25.8825 208.82 94.2734 208.82C94.2734 208.82 690.25 207.757 758.641 207.757C827.032 207.757 852 210.947 852 277.397C852 343.848 792.837 352.353 758.641 352.353C724.446 352.353 153.98 352.353 94.2734 352.353C34.5672 352.353 6.34227 377.339 6.34227 426.246C6.34227 475.154 67.1342 493.229 94.2734 493.229C121.413 493.229 699.478 483.66 758.641 493.229C817.805 502.797 852 524.593 852 566.058C852 607.524 780.352 626.661 746.157 626.661C711.962 626.661 179.491 626.661 104.586 626.661C29.682 626.661 2.00001 642.078 2 698.428C1.99999 754.778 69.3052 765.942 104.586 765.942C139.867 765.942 758.641 765.942 758.641 765.942C821.5 765.942 852 784.503 852 826.5C852 868.497 821.5 895.5 766 895.5L373.807 895.5V961.5"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: p }}
          className="stroke-blue-500"
        />
        {/* <motion.circle
          cx={endPoint.x}
          cy={endPoint.y}
          r="10"
          className="fill-blue-500"
        /> */}
      </svg>
    </div>
  );
}
