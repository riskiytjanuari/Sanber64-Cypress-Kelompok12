class HomePage {
    welcome_text = '.base'

    verifyWelcomeText(){
        cy.get(this.welcome_text).should('contain.text' , 'Home Page')
    }

    goToRegisterPage() {
        cy.contains('Create an Account').click()
    }
}

export default new HomePage()