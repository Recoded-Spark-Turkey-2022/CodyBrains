/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(swiper|ssr-window|dom7|react-i18next))',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    'swiper/css': 'swiper/swiper.min.css',
  },
};
