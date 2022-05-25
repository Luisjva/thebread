/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  images: {
    domains: ["localhost","https://thebreadimg.herokuapp.com"],
  },
};

module.exports = nextConfig;
