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
      className={className}
      preserveAspectRatio="xMidYMid meet" // Change preserveAspectRatio attribute
    >
      <g transform="translate(50, 0)">
        {" "}
        {/* Add transform attribute */}
        <path
          ref={pathRef}
          d="M428.086 -14V39.5289H123.041C45.9655 39.5289 6.34227 56.5381 6.34227 106.565C6.34227 155.091 25.8825 173.101 94.2734 173.101C94.2734 173.101 690.25 172.1 758.641 172.1C827.032 172.1 852 175.102 852 237.636C852 300.17 792.836 308.174 758.641 308.174C724.446 308.174 153.98 308.174 94.2734 308.174C34.5672 308.174 6.34227 331.687 6.34227 377.712C6.34227 423.736 67.1342 440.746 94.2734 440.746C121.413 440.746 699.478 431.741 758.641 440.746C817.804 449.75 852 470.261 852 509.283C852 548.304 780.352 566.313 746.157 566.313C711.962 566.313 179.491 566.313 104.586 566.313C29.682 566.313 2.00001 580.821 2 633.85C1.99999 686.878 69.3052 697.384 104.586 697.384C139.867 697.384 758.641 697.384 758.641 697.384C825.946 697.384 852 732.903 852 772.425C852 811.946 825.946 845.964 767.868 845.964H373.807V912"
          stroke="black"
          strokeWidth="4"
        />
        <motion.path
          ref={pathRef}
          d="M428.086 -14V39.5289H123.041C45.9655 39.5289 6.34227 56.5381 6.34227 106.565C6.34227 155.091 25.8825 173.101 94.2734 173.101C94.2734 173.101 690.25 172.1 758.641 172.1C827.032 172.1 852 175.102 852 237.636C852 300.17 792.836 308.174 758.641 308.174C724.446 308.174 153.98 308.174 94.2734 308.174C34.5672 308.174 6.34227 331.687 6.34227 377.712C6.34227 423.736 67.1342 440.746 94.2734 440.746C121.413 440.746 699.478 431.741 758.641 440.746C817.804 449.75 852 470.261 852 509.283C852 548.304 780.352 566.313 746.157 566.313C711.962 566.313 179.491 566.313 104.586 566.313C29.682 566.313 2.00001 580.821 2 633.85C1.99999 686.878 69.3052 697.384 104.586 697.384C139.867 697.384 758.641 697.384 758.641 697.384C825.946 697.384 852 732.903 852 772.425C852 811.946 825.946 845.964 767.868 845.964H373.807V912"
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
      </g>
    </svg>
  );
}
