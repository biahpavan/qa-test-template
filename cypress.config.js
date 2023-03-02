const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.ploomes.com/versao-trial',
    env:  {
      apiUri: 'https://api2.ploomes.com'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
