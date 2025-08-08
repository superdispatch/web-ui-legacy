'use strict';

const createBabelConfig = require('../config/createBabelConfig');

module.exports = {
  stories: ['../packages/**/*.stories.{ts,tsx}'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-playroom'],

  webpackFinal(config) {
    const babelConfig = createBabelConfig({ docs: true });

    const jsRule = config.module.rules[0];
    jsRule.exclude = /node_modules\/(?!(luxon)\/).*/; // Luxon has optional chaining and nullish coalescing operators. So we need to compile it.
    jsRule.use[0].options.plugins.push(...babelConfig.plugins);

    config.resolve.mainFields = ['module', 'browser', 'main'];

    return config;
  },
};
