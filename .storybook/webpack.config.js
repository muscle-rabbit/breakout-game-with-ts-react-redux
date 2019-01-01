const path = require('path');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loader: 'awesome-typescript-loader'
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias['@atoms'] = path.resolve(
    __dirname,
    'src/components/atoms'
  );
  return config;
};
