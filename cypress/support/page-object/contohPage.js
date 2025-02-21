class contohPage{
    // setelah login pojok kanan atas harus ada tulisan welcome
    welcomeText = (':nth-child(2) > .greet > .logged-in')

    verifyWelcomePage(){
        cy.get(this.welcomeText).should('contain.text' , 'Welcome')
    }
}

export default new contohPage()