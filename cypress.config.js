const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
    },
  },
});