/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "roy",
        mongodb_password: "arannyak",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-site-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "roy",
      mongodb_password: "arannyak",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-site",
    },
  };
};

module.exports = nextConfig;
