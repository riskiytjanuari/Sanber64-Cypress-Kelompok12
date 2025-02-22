class homePage {
    welcomeText = ':nth-child(2) > .greet > .logged-in'


    verfifWelcomeText(){
        cy.get(this.welcomeText).should('contain.text' , 'Welcome')
    }
}

export default new homePage()