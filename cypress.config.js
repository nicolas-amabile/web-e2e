require('dotenv').config();

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL
  },
});


require('@applitools/eyes-cypress')(module);
