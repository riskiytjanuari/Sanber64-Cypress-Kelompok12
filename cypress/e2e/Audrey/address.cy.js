import AddressPage from '../../support/page-object/AudreyPageObject/AddressPage';

describe('Save Address Information Tests', () => {
    before(() => {
      cy.session('loginSession', () => {
        cy.contohLogin('twelve@mail.com', 'Sanber64');
      });
    });
  
    beforeEach(() => {
      cy.session('loginSession', () => {
        cy.contohLogin('twelve@mail.com', 'Sanber64');
      });
      cy.navigateToMyAccount();
      cy.get('.box-billing-address > .box-actions > .action > span').click();
      cy.url().should('include', '/customer/address');
    });
  
    // Positive Test Case 
    it('Successfully Save Address with All Fields', () => {
      AddressPage.clearRequiredFields(); 
      AddressPage.fillAddressForm('Tim', 'Dua Belas', 'Test Company', '1234567890', '123 Main St', 'New York', 'New York', '10001', 'United States');
      AddressPage.saveAddress();
      AddressPage.elements.successMessage().should('be.visible');
    });

    it('Successfully Save Address with All Required Fields', () => {
      AddressPage.clearRequiredFields(); 
      AddressPage.fillAddressForm('Tim', 'Dua Belas','', '1234567890', '123 Main St', 'New York', 'New York', '10001', 'United States' );
      AddressPage.saveAddress(); 
      AddressPage.checkSuccessMessage(); 
    });
  
    // Negative Test Case 
    it('Show Error When Submitting Empty Required Fields', () => {
      AddressPage.clearRequiredFields(); 
      AddressPage.saveAddress(); 
      AddressPage.checkAllErrorMessages(); 
    });
    it('Show Error for Invalid Zip Code', () => {
      AddressPage.clearRequiredFields(); 
      AddressPage.fillAddressForm('Tim', 'Dua Belas','Test Company', '1234567890', '123 Main St', 'New York', 'New York', 'abc', 'United States');
      cy.contains('Provided Zip/Postal Code seems to be invalid').should('be.visible'); 
    });
});

describe('Edit Address Billing Information Tests', () => {
    before(() => {
        cy.session('loginSession', () => {
            cy.login('twelve@mail.com', 'Sanber64');
        });
      });
    
      beforeEach(() => {
        cy.session('loginSession', () => {
          cy.login('twelve@mail.com', 'Sanber64');
        });
        cy.navigateToMyAccount();
        cy.wait(5000); 
        cy.get('.block-title .action.edit span', { timeout: 20000 }).should('be.visible').click();
        cy.get('.box-address-billing > .box-actions > .action > span').click();
        cy.wait(5000); 
        cy.url().should('include', '/customer/address'); 
      });

    // Positive Test Case
    it('Successfully Edit Address with All Fields', () => {
        AddressPage.clearRequiredFields(); 
        AddressPage.fillAddressForm('Tim', 'Dua Belas','Company A', '02079460000', '456 Main Street', 'London', 'London', '20001', 'United Kingdom' );
        AddressPage.saveAddress(); 
        AddressPage.checkSuccessMessage();
    });

    it('Successfully Edit New Address with All Required Fields', () => {
      AddressPage.clearRequiredFields();   
      AddressPage.fillAddressForm('Tim', 'Dua Belas','', '1234567890', '123 Main St', 'New York', 'New York', '10001', 'United States' );
        AddressPage.saveAddress(); 
        AddressPage.checkSuccessMessage(); 
    });

    // Negative Test Case
    it('Show Error When Submitting Empty Required Fields', () => {
        AddressPage.clearRequiredFields(); 
        AddressPage.saveAddress(); 
        AddressPage.checkAllErrorMessages(); 
    });
    it('Show Error for Invalid Zip Code', () => {
      AddressPage.clearRequiredFields(); 
      AddressPage.fillAddressForm('Tim', 'Dua Belas','Test Company', '1234567890', '123 Main St', 'New York', 'New York', 'abc', 'United States');
      cy.contains('Provided Zip/Postal Code seems to be invalid').should('be.visible'); 
    });
})

describe('Add New Address Tests', () => {
    before(() => {
        cy.session('loginSession', () => {
            cy.login('twelve@mail.com', 'Sanber64');
        });
      });
    
      beforeEach(() => {
        cy.session('loginSession', () => {
          cy.login('twelve@mail.com', 'Sanber64');
        });
        cy.navigateToMyAccount();
        cy.wait(5000); 
        cy.get('.block-title .action.edit span', { timeout: 20000 }).should('be.visible').click();
        cy.get('.column > .actions-toolbar > div.primary > .action').click();
        cy.wait(5000); 
        cy.url().should('include', '/customer/address/new'); 
      });

    it.only('Successfully Add New Address', () => {
        AddressPage.fillAddressForm('Tim', '12','Company Z', '34567890123', '111 Main St','Arizona', 'Arizona','10003', 'United States' );
        AddressPage.saveAddress(); 
        AddressPage.checkSuccessMessage(); 
    });

    it('Successfully Add New Address as Default Billing Only', () => {
        AddressPage.fillAddressForm('Tim', '12','Company B', '67890123456', '789 Main St', 'Washington', 'Washington','10002', 'United States');
        AddressPage.setAsDefaultBilling(); 
        AddressPage.saveAddress(); 
        AddressPage.checkSuccessMessage(); 
    });

    it('Successfully Add New Address as Default Shipping Only', () => {
        AddressPage.fillAddressForm('Tim', '12','Company C', '87654321098', '910 Main St', 'British Columbia', 'British Columbia', '11001', 'Canada' );
        AddressPage.setAsDefaultShipping(); 
        AddressPage.saveAddress(); 
        AddressPage.checkSuccessMessage(); 
    });

    it('Successfully Add New Address as Default Billing and Shipping', () => {
        AddressPage.fillAddressForm('Tim', '12','Company D', '0192837465', '321 Main St', 'Washington', 'Washington','10002', 'United States' );
        AddressPage.setAsDefaultBilling(); 
        AddressPage.setAsDefaultShipping(); 
        AddressPage.saveAddress(); 
        AddressPage.checkSuccessMessage(); 
    });

     // Negative Test Case
     it('Show Error When Submitting Empty Required Fields', () => {
        AddressPage.clearRequiredFields(); 
        AddressPage.saveAddress(); 
        AddressPage.checkAllErrorMessages(); 
    });
    it('Show Error for Invalid Zip Code', () => {
      AddressPage.clearRequiredFields(); 
      AddressPage.fillAddressForm('Tim', 'Dua Belas','Test Company', '1234567890', '123 Main St', 'New York', 'New York', 'abc', 'United States');
      cy.contains('Provided Zip/Postal Code seems to be invalid').should('be.visible'); 
    });
})  

