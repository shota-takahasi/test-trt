/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "cdn-i.pr.trt.com.tr"
      },
      {
        protocol: "https",
        hostname: "https://images-cdn.trtworld.com"
      }
    ]
  }
};

export default nextConfig;
