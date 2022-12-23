/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(swiper)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
};
