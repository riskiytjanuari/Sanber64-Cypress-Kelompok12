import contohPage from "../support/page-object/contohPage"

describe('contohLogin', () => {
  beforeEach(() => {
  cy.visit('')
  })

  it('Contoh Login', () => {
    cy.fixture('users.json').then((users) => {
    const datauser = users[1];
    cy.contohLogin(datauser.email , datauser.password)
    contohPage.verifyWelcomePage()
    })
  })
})