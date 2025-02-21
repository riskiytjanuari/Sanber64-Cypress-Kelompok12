import contohPage from "../support/page-object/contohPage"

describe('Login', () => {
  beforeEach(() => {
  cy.visit('')
  })
  it('Contoh Login', () => {
    cy.login('twelve@mail.com' , 'Sanber64')
    contohPage.verifyWelcomePage()
  })
})