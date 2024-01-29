// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add your Next.js configuration options here
    reactStrictMode: true, // Enable React Strict Mode
    images: {
      domains: ['FlightAca.com'], // Specify domains for optimized image loading
    },
  }
  
  module.exports = nextConfig
  