import contohPage from "../support/page-object/contohPage"

describe('contohLogin', () => {
  beforeEach(() => {
  cy.visit('')
  })

  it('Contoh Login', () => {
    cy.fixture('contoh.json').then((contoh) => {
    const datauser = contoh;
    cy.contohLogin(datauser.email , datauser.password)
    contohPage.verifyWelcomePage
    })
  })
})