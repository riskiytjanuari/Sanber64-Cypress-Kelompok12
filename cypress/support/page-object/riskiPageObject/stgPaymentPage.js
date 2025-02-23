class stgPaymentPage{
    payment_method = '.payment-group > .step-title'
    place_order_button = '.payment-method-content > :nth-child(4) > div.primary > .action'
    thank_you_text = '.base'

    verifyPaymentPage(){
        cy.get(this.payment_method).should('have.text' , 'Payment Method')
    }

    clickPlaceOrderButton(){
        cy.get(this.place_order_button).click()
    }

    verifyOrderSuccess(){
        cy.get(this.thank_you_text).should('contain.text' , 'Thank you')
    }



}

export default new stgPaymentPage()