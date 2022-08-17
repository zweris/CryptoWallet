module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          enums: './src/enums',
          helpers: './src/helpers',
          models: './src/models',
          screens: './src/screens',
          theme: './src/theme',
          assets: './src/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
