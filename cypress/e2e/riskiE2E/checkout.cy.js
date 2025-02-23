import stgHomePage from "../../support/page-object/riskiPageObject/stgHomePage"
import stgCartPage from "../../support/page-object/riskiPageObject/stgCartPage"
import stgCheckoutPage from "../../support/page-object/riskiPageObject/stgCheckoutPage"
import stgPaymentPage from "../../support/page-object/riskiPageObject/stgPaymentPage"

describe('Checkout flow', () => {
beforeEach(() => {
cy.visit('')
})

// Positif Case
it('Check shipping addres page', () => {
    cy.fixture('users.json').then((users) => {
    // login with user index 1   
    const datauser = users[1];
    cy.contohLogin(datauser.email , datauser.password)
    // validate success login
    stgHomePage.verfifWelcomeText()
    // scroll page 1100px
    cy.scrollTo(0,1000)
    // click selected product
    stgHomePage.addToCartArgusWeather()
    cy.wait(1500)
    // select size
    stgHomePage.selectSizeWeather()
    // verify selected size
    stgHomePage.selectSizeWeather()
    // select color
    stgHomePage.selectColorWeather()
    // verifiy selected color
    stgHomePage.verifySelectColorWeather
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
    // verify proceed success by redirect to checkout / shipping
    stgCheckoutPage.verifyOrderSummary()
    })
})

// Positif Case
it.only('Add Adress shipping with valid data', () => {
    cy.fixture('users.json').then((users) => {
        cy.fixture('users.json').then((users) => {
        // consume data for user shippiing
        const address = users[2];
        // login with random account
        cy.loginWithRandomAccount()
        // the step from "validate success login" until "open shipping address page"
        cy.stepToCheckout()
        //input company name
        stgCheckoutPage.inputCompanyField(address.companyName)
        //input street name
        stgCheckoutPage.inputStreetName(address.streetName)
        //input city name
        stgCheckoutPage.inputCityName(address.cityName)
        // input province name
        stgCheckoutPage.selectProvince()
        //input postal code
        stgCheckoutPage.inputPostCode(12345)
        //select country
        stgCheckoutPage.selectCountry()
        //input phone number
        stgCheckoutPage.inputPhoneNumber(address.phoneNumber)
        // select shipping rate
        stgCheckoutPage.clickRadioButton()
        // click button to payment page
        stgCheckoutPage.clickNextButton()
        // verify that system redirect to payment page
        stgPaymentPage.verifyPaymentPage()
        // click place order button
        stgPaymentPage.clickPlaceOrderButton()
        // verifiy that order success and redirect to thank you page
        stgPaymentPage.verifyOrderSuccess()

        })
    })
    })

})