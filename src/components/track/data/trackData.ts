export const trackData = [
  {
    title: "Google Analytics",
    text: "Google Analytics calculates rates based on a more extensive set of variables. This enables a more accurate assessment of your KPIs than the Shopify Platform.",
    image: "/images/google.png",
  },
  {
    title: "Heatmaps",
    text: "Heatmaps show where users move, click, and scroll collectively, so we can focus on the components that matter most and understand what is actively increasing / decreasing conversions.",
    image:
      "https://www.smartlook.com/blog/wp-content/uploads/sites/2/2022/02/how-to-read-a-heatmap-1-1024x592.jpg",
  },
  {
    title: "Session By Session Data",
    text: "Individual Session by Session Data allows us to see exactly what a prospect sees whilst on your site. When you analyse 1000+ individual sessions it becomes apparent what needs to be iterated or removed completely.",
    image: "/images/phone.jpg",
  },
];

export type TrackDataType = (typeof trackData)[0];
