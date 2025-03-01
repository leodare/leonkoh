module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-block-scoping',
    ],
    presets: ['babel-preset-expo'],
  };
};
