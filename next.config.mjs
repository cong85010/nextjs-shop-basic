/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
      },
      {
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
