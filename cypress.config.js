const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'mochawesome',
    reportPageTitle: 'Cypress E-commerce Test Report',
    html: true,
    json: true,
    overwrite: false,
    timestamp: 'mmddyyyy_HHMMss',
    charts: true,
  },
})