class stgHomePage {
    welcome_text = '.base'
    argus_weather = '[title="Argus All-Weather Tank"]'
    select_size =  '#option-label-size-143-item-167' 
    select_color =  '#option-label-color-93-item-52'
    add_to_cart = 'button[title="Add to Cart"]'

    verfifWelcomeText(){
        cy.get(this.welcome_text).should('contain.text' , 'Home Page')
    }

    addToCartArgusWeather(){
        cy.get(this.argus_weather).click()
    }

    selectSizeWeather(){
        cy.get(this.select_size).click()
    }

    selectColorWeather(){
        cy.get(this.select_color).click()
    }

    addToCartWeather(){
        cy.get(this.add_to_cart).click()
    }
}

export default new stgHomePage()