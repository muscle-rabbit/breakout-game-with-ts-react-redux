const path = require('path');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loader: 'ts-loader'
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
