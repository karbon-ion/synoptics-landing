import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["placehold.co", "images.unsplash.com","blogimagesynoptix.blob.core.windows.net","randomuser.me","cdn-icons-png.flaticon.com","dummyimage.com", "upload.wikimedia.org", "avatars.githubusercontent.com", "assets-global.website-files.com", "mistral.ai", "seeklogo.com", "cdn.sanity.io", "logowik.com"]
}
};

export default nextConfig;
