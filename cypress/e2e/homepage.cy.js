/// <reference types="cypress" />
import { images, socialLinks } from '../fixtures/site-data.json'

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  describe('A11y', () => {
    it.skip('passes A11y', () => {
      cy.checkA11y()
    })
  })

  describe('Home page images', () => {
    images.forEach(({ link, alt }) => {
      it(`Checks image for ${link}`, () => {
        cy.getByHref(link)
          .should('be.visible')
          .getImgByAlt(alt)
          .should('be.visible')
          .and('have.prop', 'naturalWidth')
          .should('be.greaterThan', 0)
      })
    })
  })

  describe('Home page social links', () => {
    socialLinks.forEach(({ link, name }) => {
      it(`Checks link for ${name}`, () => {
        cy.getByHref(link)
          .should('be.visible')
          .get('svg')
          .should('be.visible')
      })
    })
  })
})