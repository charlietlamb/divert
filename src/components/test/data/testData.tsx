import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export const testData = [
  {
    image: "/images/lila.png",
    imageAlt: "Lila Rasa",
    mobileImage: "/images/lilaMob.png",
    mobileAlt: "Mobile Alt",
    title: "Chaimate",
    intro:
      "Lila Rasa is a next generation jewelry brand that creates bespoke handmade jewelry such as necklaces and bracelets.",
    problem:
      "In September 2023, Lila Rasa was advertising on Meta - a very saturated ad market for jewelry brands.|<0.5% CVR Channel = Meta & Google",
    solution:
      "We updated their landing pages & ad creatives, with a reductionist approach, honing in on one specific customer archetype.",

    component: (
      <div>
        <div className="flex items-center">
          <ArrowUpRight className="min-h-12 min-w-12 text-green-500" />
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">4.2%</span>{" "}
            <span className="text-slate-400">CVR Increase</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <ArrowDownRight className="min-h-12 min-w-12 text-red-500" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">50.2%</span>{" "}
              <span className="text-slate-400">CMP Decrease</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    image: "/images/lila.png",
    imageAlt: "Lila Rasa",
    mobileImage: "/images/lilaMob.png",
    mobileAlt: "Mobile Alt",
    title: "Chaimate",
    intro:
      "ChaiMate is a healthy alternative to energy drinks, with a focus on sustained energy release without the crash. Featured in Financial Times FT100: Fastest growing companies.",
    problem:
      "Successfully grown organically in Poland - becoming the number 1 cola drink behind Coca Cola and Pepsi, wanting to reposition to the UK market and scale via paid Meta ads.|<1.2% CVR|Channel = Meta",
    solution:
      "Repositioned with a focus on the mental benefits. One page funnel, utilizing dynamic creatives to match the landing page with individual taglines.",
    component: (
      <div>
        <div className="flex items-center">
          <ArrowUpRight className="min-h-12 min-w-12 text-green-500" />
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">3.9%</span>{" "}
            <span className="text-slate-400">CVR Increase</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <ArrowDownRight className="min-h-12 min-w-12 text-red-500" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">24.1%</span>{" "}
              <span className="text-slate-400">CMP Decrease</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    image: "/images/lila.png",
    imageAlt: "Lila Rasa",
    mobileImage: "/images/lilaMob.png",
    mobileAlt: "Mobile Alt",
    title: "Classic Oak",
    intro:
      "Classic Oak is a high quality timber manufacturer that grew over 4 decades through organic outbound and word of mouth.",
    problem:
      "Wanted to switch to paid advertising to generate new high LTV customers.|Channel = Meta & Google",
    solution:
      "Built up an organic following on Meta platforms, Facebook and Instagram. Built individual landing pages for specific timber requirements, using different positioning statements for cold and retargeting campaigns.|Build individual landing pages for specific timber requirements, using different positioning statements for cold and retargeting campaigns.",
    component: (
      <div className="flex items-center">
        <ArrowUpRight className="min-h-12 min-w-12 text-green-500" />
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">5.9%</span>{" "}
          <span className="text-slate-400">CVR Increase</span>
        </div>
      </div>
    ),
  },
];
