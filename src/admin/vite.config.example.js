const { mergeConfig } = require('vite'); // Agora funciona ✅

module.exports = (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  });
};