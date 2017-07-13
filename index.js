'use strict';
const config = require('./config');
const plugins = require('./plugins');

const rules = {};

// Embed plugins.
plugins.forEach(pluginName => {
  const plugin = require(`eslint-plugin-${pluginName}`);
  Object.keys(plugin.rules).forEach(ruleName => {
    rules[`${pluginName}/${ruleName}`] = plugin.rules[ruleName];
  });
});

module.exports = {
  configs: {
    standard: config,
  },
  rules: rules,
};