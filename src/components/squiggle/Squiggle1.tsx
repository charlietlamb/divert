import React from "react";

export default function Squiggle1({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className={className}
    >
      <path
        d="M21.973094940185547,373.09417724609375C34.28998509089152,365.70403935750323,86.4857969601949,329.42898768107096,93.72196960449219,330.0448303222656C100.95814224878947,330.6606729634603,49.19132705688477,376.6816101074219,64.12555694580078,376.6816101074219C79.0597868347168,376.6816101074219,170.55604850769043,329.5829470316569,180.7174835205078,330.0448303222656C190.8789185333252,330.50671361287436,106.69058118184407,378.602385152181,123.3183822631836,379.3721923828125C139.94618334452312,380.141999613444,266.1853364690145,335.2989515177409,277.5784606933594,334.5291442871094C288.97158491770426,333.7593370564779,175.21374435424804,373.81014724731443,189.68609619140625,374.88787841796875C204.15844802856446,375.96560958862307,346.3333450826009,340.4992660013835,361.8834228515625,340.80718994140625C377.4335006205241,341.115113881429,265.6427675374349,376.8355746968587,280.2690734863281,376.6816101074219C294.89537943522134,376.52764551798504,427.2242235819499,340.37219212849936,447.085205078125,339.9103088378906C466.9461865743001,339.4484255472819,380.5679981486003,373.22122060139975,395.964111328125,373.99102783203125C411.3602245076497,374.76083506266275,523.3766806030274,344.3946228027344,536.7713012695312,344.3946228027344C550.1659219360351,344.3946228027344,458.44095530192055,373.99102783203125,473.99102783203125,373.99102783203125C489.54110036214195,373.99102783203125,614.267546081543,343.6248155721029,627.354248046875,344.3946228027344C640.440950012207,345.1644300333659,535.2900080362956,377.24365127563476,550.2242431640625,378.475341796875C565.1584782918294,379.70703231811524,703.572522684733,351.261595102946,714.3497924804688,351.56951904296875C725.1270622762045,351.8774429829915,602.9969825236003,379.9611547851562,613.0044555664062,380.2690734863281C623.0119286092122,380.5769921875,745.2406627400716,357.9820583597819,772.645751953125,353.36322021484375"
        fill="none"
        strokeWidth="10"
        stroke='url("#SvgjsLinearGradient1001")'
        strokeLinecap="round"
        strokeDasharray="0 0"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1001">
          <stop stop-color="hsl(217.2,91.2%,59.8%)" offset="0"></stop>
          <stop stop-color="hsl(224.3,76.3%,48%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
