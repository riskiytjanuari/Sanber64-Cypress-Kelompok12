import stgHomePage from "../support/page-object/stgHomePage"
import stgCartPage from "../support/page-object/stgCartPage"

describe('Normal login', () => {
beforeEach(() => {
cy.visit('')
})

it.only('login with second account for checkout flow', () => {
    cy.fixture('users.json').then((users) => {
    const datauser = users[1];
    cy.contohLogin(datauser.email , datauser.password)
    stgHomePage.verfifWelcomeText()
    cy.scrollTo(0,1000)
    stgHomePage.addToCartArgusWeather()
    stgHomePage.selectSizeWeather()
    stgHomePage.selectColorWeather()
    stgHomePage.addToCartWeather()
    cy.wait(3000)
    stgCartPage.clickShowCart()
    // stgCartPage.editQuantity()
    // cy.wait(1000)
    // stgCartPage.updateQuantity()
    stgCartPage.clickProceed()
    stgCartPage.verifyOrderSummary()
    })
})
})