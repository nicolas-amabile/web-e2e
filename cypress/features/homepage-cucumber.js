import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { navigation } from '../fixtures/site-data.json'

When('I visit nicolas-amabile.dev', () => cy.visit('/'));

Then('I should see the navigation bar with all items', () => {
  navigation.forEach(({ text, link }) => {
    cy.get('nav').getByHref(link).should('be.visible').contains(text)
  })
});