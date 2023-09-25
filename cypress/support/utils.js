Cypress.Commands.add('checkEmail', (email) => {
  const input = Cypress.$('<input type="email" required />')[0]
  input.value = email
  return cy.wrap(input.checkValidity())
})