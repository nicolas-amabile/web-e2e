
describe('Contact page', () => {
  beforeEach(() => {
    cy.visit('/contacto')
  })

  it(`Checks valid emails`, () => {
    cy.checkEmail('test@gmail.com').then((isEmailValid) => {
      expect(isEmailValid).to.be.true
    })
  })

  it(`Checks invalid emails`, () => {
    cy.checkEmail('test@').then((isEmailValid) => {
      expect(isEmailValid).to.be.false
    })
  })
})