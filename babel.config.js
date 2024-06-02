module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@features': './src/features',
          '@services': './src/services',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
