const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // Desativa Cypress.env() hidratando valores no browser.
  // Evita warning de migração no Cypress 15.
  allowCypressEnv: false,
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