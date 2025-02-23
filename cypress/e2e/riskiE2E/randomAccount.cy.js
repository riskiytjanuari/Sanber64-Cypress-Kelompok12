describe('Create random account', () => {  

  function randomUser(){
    const randomString = Math.random().toString(36).substring(2,10)
    const randomEmail = randomString + '@mail.com'
    return randomEmail
  }

  let email = randomUser()
  let password = 'Sanber64joss'

  function randomFirstName(){
    const randomFirstName = Math.random().toString(26).substring(2,8)
    return randomFirstName
  }

  let firstname = randomFirstName()

  function randomLastName(){
    const randomLastName = Math.random().toString(26).substring(2,8)
    return randomLastName
  }

  let lastname = randomLastName()

  beforeEach(() => {
    cy.visit('')
  })
  it('Create random account for filling shipping addres for the first time', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.base').should('have.text' , 'My Account')
  })
})