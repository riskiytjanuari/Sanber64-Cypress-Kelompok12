class RegisterPage {
    firstName = '[name="firstname"]'
    lastName = '[name="lastname"]'
    email = '[name="email"]'
    password = '#password'
    pass_confirm = '[name="password_confirmation"]'
    registerButton = 'button[title="Create an Account"]'
    errorMsg = '#maincontent > div.page.messages > div:nth-child(2) > div > div'

    verifyOnRegisterPage() {
        cy.url().should('include', 'customer/account/create')
    }

    inputFirstName(firstName) {
        cy.get(this.firstName).type(firstName)
    }

    fillRegistrationForm(firstName, lastName, email, password) {
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.email).type(email)
        cy.get(this.password).type(password)
        cy.get(this.pass_confirm).type(password)
    }

    submitForm() {
        cy.get(this.registerButton).click()
    }
}

export default new RegisterPage()