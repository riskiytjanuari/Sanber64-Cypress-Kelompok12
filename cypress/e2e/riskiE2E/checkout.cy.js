import stgHomePage from "../../support/page-object/riskiPage/stgHomePage"
import stgCartPage from "../../support/page-object/riskiPage/stgCartPage"

describe('Normal login', () => {
beforeEach(() => {
cy.visit('')
})

it('Check shipping addres page', () => {
    cy.fixture('users.json').then((users) => {
    // login with user index 1   
    const datauser = users[1];
    cy.contohLogin(datauser.email , datauser.password)
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
    stgCartPage.verifyOrderSummary()
    })
})



})