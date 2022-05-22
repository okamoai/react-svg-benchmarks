/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /base64/,
    },
    {
      test: /\.svg$/i,
      use: [{ loader: 'svg-sprite-loader'}],
      resourceQuery: /svg-sprite/,
    },
    {
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { typescript: true, memo: true, svgo: false }}],
      resourceQuery: /inline-svg/,
    })
    return config
  },

}

module.exports = nextConfig
