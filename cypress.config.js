const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
    },
    defaultCommandTimeout: 15000,  // Tunggu hingga 15 detik untuk setiap perintah
    pageLoadTimeout: 20000,  // Tunggu hingga 20 detik untuk loading halaman
    requestTimeout: 15000,  // Tunggu hingga 15 detik untuk request API
    responseTimeout: 15000,  // Tunggu hingga 15 detik untuk response API
  },
});