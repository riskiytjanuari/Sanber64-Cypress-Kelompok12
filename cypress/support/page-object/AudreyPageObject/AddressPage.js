class AddressPage {
    elements = {
      firstNameInput: () => cy.get('#firstname'),
      lastNameInput: () => cy.get('#lastname'),
      companyInput: () => cy.get('#company'),
      telephoneInput: () => cy.get('#telephone'),
      streetInput: () => cy.get('#street_1'),
      cityInput: () => cy.get('#city'),
      regionInput: () => cy.get('#region'), // text input for region
      regionSelect: () => cy.get('#region_id'), // dropdown for region
      zipInput: () => cy.get('#zip'),
      countrySelect: () => cy.get('#country'),
      saveAddressButton: () => cy.get('#form-validate > .actions-toolbar > div.primary > .action'),
      successMessage: () => cy.contains('You saved the address'),
      firstNameError: () => cy.get('#firstname-error'),
      lastNameError: () => cy.get('#lastname-error'),
      telephoneError: () => cy.get('#telephone-error'),
      streetError: () => cy.get('#street_1-error'),
      cityError: () => cy.get('#city-error'),
      countryError: () => cy.get('#country-error'),
      primaryBillingCheckbox: () => cy.get('#primary_billing'),
      primaryShippingCheckbox: () => cy.get('#primary_shipping')
    };
  
    fillRegion(country, region) {
      if (!region) return;
      cy.wait(1000);
      cy.get('body').then($body => {
        if ($body.find('#region_id').is(':visible')) {
          this.elements.regionSelect().select(region);
        } else {
          this.elements.regionInput().clear().type(region);
        }
      });
    }
  
    fillAddressForm(firstName, lastName, company, telephone, street, city, region, zip, country) {
      if (firstName) this.elements.firstNameInput().clear().type(firstName);
      if (lastName) this.elements.lastNameInput().clear().type(lastName);
      if (company) this.elements.companyInput().clear().type(company);
      if (telephone) this.elements.telephoneInput().clear().type(telephone);
      if (street) this.elements.streetInput().clear().type(street);
      if (city) this.elements.cityInput().clear().type(city);
      if (country) {
        this.elements.countrySelect().select(country);
        this.fillRegion(country, region);
      }
      if (zip) this.elements.zipInput().clear().type(zip);
    }
  
    clearRequiredFields() {
      this.elements.firstNameInput().clear();
      this.elements.lastNameInput().clear();
      this.elements.companyInput().clear();
      this.elements.telephoneInput().clear();
      this.elements.streetInput().clear();
      this.elements.cityInput().clear();
      
      cy.get('body').then($body => {
        if ($body.find('#region_id').is(':visible')) {
          this.elements.regionSelect().select('', { force: true });
        } else if ($body.find('#region').is(':visible')) {
          this.elements.regionInput().clear();
        }
      });
      
      this.elements.zipInput().clear();
      this.elements.countrySelect().select('');
    }
  
    saveAddress() {
      this.elements.saveAddressButton().click();
    }
  
    checkSuccessMessage() {
      this.elements.successMessage().should('be.visible');
    }
  
    checkAllErrorMessages() {
      this.elements.firstNameError().should('be.visible');
      this.elements.lastNameError().should('be.visible');
      this.elements.telephoneError().should('be.visible');
      this.elements.streetError().should('be.visible');
      this.elements.cityError().should('be.visible');
      this.elements.countryError().should('be.visible');
    }
  
    setAsDefaultBilling() {
      this.elements.primaryBillingCheckbox().check();
    }
  
    setAsDefaultShipping() {
      this.elements.primaryShippingCheckbox().check();
    }
  }
  
  export default new AddressPage();