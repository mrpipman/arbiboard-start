const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@shared'] = path.resolve(__dirname, '../shared');
    return config;
  },
};
