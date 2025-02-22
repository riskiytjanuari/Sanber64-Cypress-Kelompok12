import homePage from "./page-object/homePage"
import registerPage from "./page-object/registerPage"
import stgCartPage from "./page-object/riskiPageObject/stgCartPage"
import stgCheckoutPage from "./page-object/riskiPageObject/stgCheckoutPage"
import stgHomePage from "./page-object/riskiPageObject/stgHomePage"
stgCheckoutPage

// Hanya Contoh Login
Cypress.Commands.add('contohLogin' , (username , password) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(username)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})

Cypress.Commands.add('stepToRegister', () => {
    cy.visit('')
    homePage.verifyWelcomeText()
    homePage.goToRegisterPage()
    registerPage.verifyOnRegisterPage()
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

