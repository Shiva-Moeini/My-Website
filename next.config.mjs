/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
  basePath: "/My-Website", // Replace with your GitHub repo name
  images: {
    unoptimized: true, }// Fixes image issues
};

export default nextConfig;
