/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ⬅ disables built-in image optimization
  },
};

export default nextConfig;
