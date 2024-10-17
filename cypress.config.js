const preprocessor = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com/#/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', preprocessor())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
    stepDefinitions: "cypress/e2e/step_definitions"
  },
});
