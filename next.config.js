/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    appDir: true
};

module.exports = nextConfig;

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/1234",
//         destination: "/contact",
//     permanent: true
//       }
//     ]
//   }
// }