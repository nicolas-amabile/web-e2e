/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://nicolas-amabile.dev/')
    cy.injectAxe()
  })

  it('passes A11y', () => {
    cy.checkA11y()
  })
})