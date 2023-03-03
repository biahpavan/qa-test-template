const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:  {
      apiUri: 'https://api2.ploomes.com'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
