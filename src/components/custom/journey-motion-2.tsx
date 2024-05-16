import React from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

const animations: Record<string, TargetAndTransition> = {
  "_35_9_ellipse_10": {
    "x": [
      null,
      9,
      9
    ],
    "transition": {
      "x": {
        "type": "keyframes",
        "ease": [
          [
            0,
            0,
            1,
            1
          ],
          [
            0,
            0,
            1,
            1
          ]
        ],
        "times": [
          0,
          0.6530612244897959,
          0.8857142857142857
        ],
        "duration": 0.245
      },
      "y": {
        "type": "keyframes",
        "ease": [
          [
            0,
            0,
            1,
            1
          ],
          [
            0,
            0,
            1,
            1
          ]
        ],
        "times": [
          0,
          0.40816326530612246,
          1
        ],
        "duration": 0.245
      }
    },
    "y": [
      null,
      -5,
      -5
    ]
  }
}

export function App() {
  return (
    <>
      <motion.div id="_35_9_ellipse_10" animate={animations._35_9_ellipse_10} />
    </>
  )
}
