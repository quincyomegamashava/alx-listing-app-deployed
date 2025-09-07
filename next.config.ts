// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     allowedDevOrigins: ['http://192.168.70.80:3000'], // add your IP here
//   },
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // or your IP
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
};

export default nextConfig;
