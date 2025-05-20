import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["placehold.co", "images.unsplash.com","blogimagesynoptix.blob.core.windows.net","randomuser.me","cdn-icons-png.flaticon.com","dummyimage.com"]
}
};

export default nextConfig;
