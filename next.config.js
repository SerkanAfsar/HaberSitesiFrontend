const path = require("path");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
    LIMIT_SIZE: process.env.LIMIT_SIZE,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "Components"),
      path.join(__dirname, "app"),
      path.join(__dirname, "Containers"),
    ],
    additionalData: `@import "@/styles/custom.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tailorbrands.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

module.exports = nextConfig;
