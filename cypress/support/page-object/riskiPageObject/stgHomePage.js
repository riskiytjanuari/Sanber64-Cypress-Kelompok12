class stgHomePage {
    welcome_text = '.base'
    argus_weather = '[title="Argus All-Weather Tank"].product-item-link'
    select_size =  '#option-label-size-143-item-167' 
    select_color =  '#option-label-color-93-item-52'
    add_to_cart = 'button[title="Add to Cart"]'
    product_detail = '.tab-label-description-title'
    size_validation = "//div[@class='swatch-attribute size']/span[@class='swatch-attribute-selected-option']"
    color_validation = "//div[@class='swatch-attribute color']/span[@class='swatch-attribute-selected-option']"

    verfifWelcomeText(){
        cy.get(this.welcome_text).should('contain.text' , 'Home Page')
    }

    addToCartArgusWeather(){
        cy.get(this.argus_weather).click()
    }

    verifyShowProductDetail(){
        cy.get(this,this.product_detail).should('be.visible')
    }

    selectSizeWeather(){
        cy.get(this.select_size).click()
    }

    verifySelecetSizeWether(){
        cy.get(this.size_validation).should('have.text' , 'S')
    }

    selectColorWeather(){
        cy.get(this.select_color).click()
    }

    verifySelectColorWeather(){
        cy.get(this.color_validation).should('have.text' , 'Gray')
    }

    addToCartWeather(){
        cy.get(this.add_to_cart).click()
    }
}

export default new stgHomePage()