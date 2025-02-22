class stgCheckOutPage{
    order_summary = '#shipping > .step-title'
    company_field = '[name="company"]'
    street_name = '[name="street[0]"]'
    city_name = '[name="city"]'



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
}

export default new stgCheckOutPage()