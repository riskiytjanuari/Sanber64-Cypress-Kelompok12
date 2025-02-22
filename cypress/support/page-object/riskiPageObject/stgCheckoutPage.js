class stgCheckOutPage{
    order_summary = '#shipping > .step-title'
    company_field = '[name="company"]'
    street_name = '[name="street[0]"]'
    city_name = '[name="city"]'
    province = '[name="region_id"]'
    country = '[name="country_id"]'
    post_code = '[name="postcode"]'
    phone_number = '[name="telephone"]'
    radio_button = ':nth-child(1) > :nth-child(1) > .radio'
    next_button = '.button'

    



    verifyOrderSummary(){
        cy.get(this.order_summary).should('contain.text' , 'Shipping Address')
    }
    inputCompanyField(text){
        cy.get(this.company_field).type(text)
    }
    inputStreetName(text){
        cy.get(this.street_name).type(text)
    }
    inputCityName(text){
        cy.get(this.city_name).type(text)
    }
    clickProvinceDropdown(){
        cy.select(this.province).click()
    }
    selectProvince(){
        cy.get(this.province).select('Arizona')
    }
    inputPostCode(text){
        cy.get(this.post_code).type(text)
    }
    clickCountryDropdown(){
        cy.get(this.country).click()
    }
    selectCountry(){
        cy.get(this.country).select('United States')
    }
    inputPhoneNumber(text){
        cy.get(this.phone_number).type(text)
    }
    clickRadioButton(){
        cy.get(this.radio_button).click()
    }
    clickNextButton(){
        cy.get(this.next_button).click()
    }
}

export default new stgCheckOutPage()