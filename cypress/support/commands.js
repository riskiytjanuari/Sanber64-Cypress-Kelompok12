Cypress.Commands.add('login' , (username , password) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(username)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})

