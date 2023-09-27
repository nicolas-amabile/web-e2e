require('dotenv').config();
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    specPattern: ["**/*.feature", "**/*.cy.js"],
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});

require('@applitools/eyes-cypress')(module);
