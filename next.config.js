/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Si usas imágenes desde dominios externos, agrégalos en `domains`
  images: {
    domains: []
  },
};

module.exports = nextConfig;
