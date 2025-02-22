class stgChartPage {
    breatheEasyTankDetails = '.value > :nth-child(1)'
    sizeL = '#option-label-size-143-item-169'
    showSize = '.size > .swatch-attribute-selected-option'
    colorPurple = '#option-label-color-93-item-57'
    showColor = '.swatch-attribute.color > .swatch-attribute-selected-option'
    addToChartButton = '#product-addtocart-button'
    showChartButton = '.showcart'
    checkoutButton = '#top-cart-btn-checkout'

    verifyBreatheEasyTank(){
        cy.get(this.breatheEasyTankDetails).should('contain.text' , 'The Breathe Easy Tank')
    }
}

export default new stgChartPage()