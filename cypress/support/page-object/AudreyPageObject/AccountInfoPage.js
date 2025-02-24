class AccountInfoPage {
    elements = {
      firstNameInput: () => cy.get('#firstname'),
      lastNameInput: () => cy.get('#lastname'),
      emailInput: () => cy.get('#email'),
      currentPasswordInput: () => cy.get('#current-password'),
      newPasswordInput: () => cy.get('#password'),
      confirmPasswordInput: () => cy.get('#password-confirmation'),
      changeEmailCheckbox: () => cy.get('#change-email'),
      changePasswordCheckbox: () => cy.get('#change-password'),
      saveButton: () => cy.get('button.action.save.primary'),
      successMessage: () => cy.contains('You saved the account information.'),

      firstNameError: () => cy.get('#firstname-error'),
      lastNameError: () => cy.get('#lastname-error'),
      emailError: () => cy.get('#email-error'),
      currentPasswordError: () => cy.get('#current-password-error'),
      passwordError: () => cy.get('#password-error'),
      passwordConfirmationError: () => cy.get('#password-confirmation-error')
    };
  
    updateFirstName(firstName) {
      this.elements.firstNameInput().clear().type(firstName);
    }
  
    updateLastName(lastName) {
      this.elements.lastNameInput().clear().type(lastName);
    }
  
    updateEmail(email) {
      this.elements.changeEmailCheckbox().check();
      this.elements.emailInput().clear().type(email);
    }
  
    updatePassword(currentPassword, newPassword) {
      this.elements.changePasswordCheckbox().check();
      this.elements.currentPasswordInput().type(currentPassword);
      this.elements.newPasswordInput().type(newPassword);
      this.elements.confirmPasswordInput().type(newPassword);
    }
  
    saveChanges() {
      this.elements.saveButton().click();
    }

    clearRequiredFields() {
      this.elements.firstNameInput().clear();
      this.elements.lastNameInput().clear();
      this.elements.emailInput().clear();
      this.elements.currentPasswordInput().clear();
      this.elements.currentPasswordInput().clear();
      this.elements.newPasswordInput().clear();
      this.elements.confirmPasswordInput().clear();
    }
    
    checkAllErrorMessages() {
      this.elements.firstNameError().should('be.visible');
      this.elements.lastNameError().should('be.visible');
      this.elements.emailError().should('be.visible');
      this.elements.currentPasswordError().should('be.visible');
      this.elements.passwordError().should('be.visible');
      this.elements.passwordConfirmationError().should('be.visible');
    }  
  }

  export default new AccountInfoPage();