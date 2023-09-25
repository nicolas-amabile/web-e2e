Cypress.Commands.add('getByHref', (link) => cy.get(`a[href^="${link}"]`))

Cypress.Commands.add('getImgByAlt', (alt) => cy.get(`img[alt^="${alt}"]`))
