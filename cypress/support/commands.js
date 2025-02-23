import stgCartPage from "./page-object/riskiPageObject/stgCartPage"
import stgCheckoutPage from "./page-object/riskiPageObject/stgCheckoutPage"
import stgHomePage from "./page-object/riskiPageObject/stgHomePage"
stgCheckoutPage

// create random account
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

  // end random account

// Login for normal checkout  purpose
Cypress.Commands.add('contohLogin' , (username , password) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(username)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})

// flow from after logged in until show shipping address page
Cypress.Commands.add('stepToCheckout' , () => {
    // validate success login
        stgHomePage.verfifWelcomeText()
        // scroll page 1000px
        cy.scrollTo(0,1000)
        // click selected product
        stgHomePage.addToCartArgusWeather()
        // select size
        stgHomePage.selectSizeWeather()
        // select color
        stgHomePage.selectColorWeather()
        // add to cart
        stgHomePage.addToCartWeather()
        // waiting page to load 3s
        cy.wait(3000)
        // click cart
        stgCartPage.clickShowCart()
        // stgCartPage.editQuantity()
        // cy.wait(1000)
        // stgCartPage.updateQuantity()
    
        // click proceed button
        stgCartPage.clickProceed()
        // verify page already redirect to checkout / shipping
        stgCheckoutPage.verifyOrderSummary()
})

// Create random account for filling new address for new user that want to checkout
Cypress.Commands.add('loginWithRandomAccount' , () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('.base').should('have.text' , 'My Account')
    cy.get('img').click()
})
