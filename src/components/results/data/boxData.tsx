import Squiggle1 from "@/components/squiggle/Squiggle1";
import Squiggle2 from "@/components/squiggle/Squiggle2";
import Squiggle3 from "@/components/squiggle/Squiggle3";
import Squiggle4 from "@/components/squiggle/Squiggle4";
const className = "absolute bottom-0 left-0 max-w-full";
export const boxData = [
  {
    title: "37%",
    text: "Average decrease in customer acquisition cost on Meta (Facebook & Instagram).",
    svg: <Squiggle1 className={className} />,
  },
  {
    title: "22%",
    text: "Average click through rate, from the landing page to checkout.",
    svg: <Squiggle2 className={className} />,
  },
  {
    title: "212%",
    text: "Average increase in LTV value from landing page traffic.",
    svg: <Squiggle3 className={className} />,
  },
  {
    title: "247%",
    text: "Average increase in ad spend after implementing a divert landing page.",
    svg: <Squiggle4 className={className} />,
  },
];
