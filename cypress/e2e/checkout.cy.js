import stgHomePage from "../support/page-object/stgHomePage"
import stgChartPage from "../support/page-object/stgChartPage"

describe('Normal login', () => {
beforeEach(() => {
cy.visit('')
})

it.only('login with second account for checkout flow', () => {
    cy.fixture('users.json').then((users) => {
    const datauser = users[1];
    cy.contohLogin(datauser.email , datauser.password)
    stgHomePage.verfifWelcomeText()
    cy.scrollTo(0,500)
    stgHomePage.addToCartArgusWeather()
    stgHomePage.selectSizeWeather()
    stgHomePage.selectColorWeather()
    stgHomePage.addToCartWeather()
    })
})
})