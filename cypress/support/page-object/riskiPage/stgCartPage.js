class stgCartPage {
    // sizeL = '#option-label-size-143-item-169'
    // showSize = '.size > .swatch-attribute-selected-option'
    // colorPurple = '#option-label-color-93-item-57'
    // showColor = '.swatch-attribute.color > .swatch-attribute-selected-option'
    // addToChartButton = '#product-addtocart-button'
    show_cart_button = '.showcart'
    checkout_button = '#top-cart-btn-checkout'
    order_summary = '#shipping > .step-title'
    quantity = '#cart-item-565491-qty'
    update_quantity = '.update-cart-item-565491'

    clickShowCart(){
        cy.get(this.show_cart_button).click()
    }

    editQuantity(){
        cy.get(this.quantity).clear().type(1)
    }
    updateQuantity(){
        cy.get(this.updateQuantity).click()
    }
    clickProceed(){
        cy.get(this.checkout_button).click()
    }
    verifyOrderSummary(){
        cy.get(this.order_summary).should('contain.text' , 'Shipping Address')
    }

}

export default new stgCartPage()