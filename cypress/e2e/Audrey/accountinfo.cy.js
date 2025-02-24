import AccountInfoPage from '../../support/page-object/AudreyPageObject/AccountInfoPage';

describe('Edit Account Information Tests', () => {
  before(() => {
    cy.session('loginSession', () => {
      cy.contohLogin('twelve@mail.com', 'Sanber64');
    });
  });

  beforeEach(() => {
    cy.session('loginSession', () => {
      cy.contohLogin('twelve@mail.com', 'Sanber64');
    });
    cy.navigateToMyAccount()
    cy.get('.box-billing-address > .box-actions > .action > span').click(); //Edit 
  });

  // Positive Test Cases
  it('Successfully Update First name and Last Name', () => {
    AccountInfoPage.updateFirstName('Tim');
    AccountInfoPage.updateLastName('Dua Belas');
    AccountInfoPage.saveChanges();
    AccountInfoPage.elements.successMessage().should('be.visible');
  });
  it('Successfully Update Email Address', () => {
    AccountInfoPage.updateEmail('duabelas@mail.com');
    AccountInfoPage.elements.currentPasswordInput().type('Sanber64');
    AccountInfoPage.saveChanges();
    AccountInfoPage.elements.successMessage().should('be.visible');
  });
  it('Successfully Update Password', () => {
    AccountInfoPage.updatePassword('Sanber64', '64Sanber');
    AccountInfoPage.saveChanges();
    AccountInfoPage.elements.successMessage().should('be.visible');
  });
  it('Successfully Update Both Email and Password', () => {
    cy.get('#change-email').check();
    cy.get('#change-password').check();    
    AccountInfoPage.updateEmail('duabelas@mail.com');
    AccountInfoPage.updatePassword('Sanber64', '64Sanber');
    AccountInfoPage.saveChanges();
    AccountInfoPage.elements.successMessage().should('be.visible');
  });
  it('Successfully Update First Name, Last Name, Email, and Password', () => {
    AccountInfoPage.updateFirstName('Team');
    AccountInfoPage.updateLastName('12');
    cy.get('#change-email').check();
    cy.get('#change-password').check();    
    AccountInfoPage.updateEmail('duabelas@mail.com');
    AccountInfoPage.updatePassword('Sanber64', '64Sanber');
    AccountInfoPage.saveChanges();
    AccountInfoPage.elements.successMessage().should('be.visible');
  });

  // Negative Test Cases
  it('Show Error When Submitting Empty Required Fields (First Name, Last Name, Change Email, Change Password)', () => {
    AccountInfoPage.clearRequiredFields();
    AccountInfoPage.elements.changeEmailCheckbox().check();
    AccountInfoPage.elements.changePasswordCheckbox().check();
    AccountInfoPage.elements.saveButton().click();
    AccountInfoPage.checkAllErrorMessages();
  });
  it('Show Error for Invalid Email Format', () => {
    AccountInfoPage.elements.changeEmailCheckbox().check();
    AccountInfoPage.elements.emailInput().clear().type('duabelasmail');
    AccountInfoPage.elements.currentPasswordInput().type('Sanber64');
    AccountInfoPage.elements.saveButton().click();
    AccountInfoPage.checkCustomErrorMessage('Please enter a valid email address');
  });
  it('Show Error When Passwords Do Not Match', () => {
    AccountInfoPage.elements.changePasswordCheckbox().check();
    AccountInfoPage.elements.currentPasswordInput().type('Sanber64');
    AccountInfoPage.elements.newPasswordInput().type('64Sanber');
    AccountInfoPage.elements.confirmPasswordInput().type('6Sanber');
    AccountInfoPage.elements.saveButton().click();
    AccountInfoPage.checkCustomErrorMessage('Please enter the same value again.');
  });
  it('Show Error when Entering Incorrect Current Password', () => {
    AccountInfoPage.elements.changePasswordCheckbox().check();
    AccountInfoPage.elements.currentPasswordInput().type('Sanber');
    AccountInfoPage.elements.newPasswordInput().type('Sanber64');
    AccountInfoPage.elements.confirmPasswordInput().type('Sanber64');
    AccountInfoPage.elements.saveButton().click();
    AccountInfoPage.checkCustomErrorMessage('The password doesn\'t match this account.');
  });
  it('Show Error when New Password Is Too Weak', () => {
    AccountInfoPage.elements.changePasswordCheckbox().check();
    AccountInfoPage.elements.currentPasswordInput().type('Sanber64');
    AccountInfoPage.elements.newPasswordInput().type('weak');
    AccountInfoPage.elements.confirmPasswordInput().type('weak');
    AccountInfoPage.elements.saveButton().click();
    AccountInfoPage.checkCustomErrorMessage('Minimum length of this field must be equal or greater than 8 symbols');
  })
});
