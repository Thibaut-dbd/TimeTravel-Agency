/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Indique à Next.js de créer un site statique
  images: {
    unoptimized: true, // Obligatoire pour GitHub Pages
  },
  // Remplace 'TimeTravel-Agency' par le nom exact de ton projet GitHub
  basePath: '/TimeTravel-Agency', 
};

export default nextConfig;
