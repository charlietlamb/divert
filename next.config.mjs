import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.smartlook.com"],
  },
};

export default withNextVideo(nextConfig);
