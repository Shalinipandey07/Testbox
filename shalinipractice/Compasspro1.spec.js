/// <reference types="Cypress" />

describe('Check functionality',function()
{
    it('As a super Admin I should be able to login',function()
    {
      cy.visit('https://qa.markarian.build-release.com/login')
      cy.get('.ng-tns-c5-0 > ').should('be.visible').type('aman@crownstack.com')
      cy.get('.ng-tns-c5-1 > ').should('be.visible').type('password')
      cy.get('.ant-checkbox-input').uncheck()
      cy.get('.login-form-button').should('be.visible').and('be.enabled').click()

    })

    it("As a Super Admin I should be able to navigate on Company Listing page", function()
    {
      cy.get('[ng-reflect-nz-title="Companies"] > a').click()
      cy.get('.title-container').should('contain','Companies')
      
      })

    it("As a Super I should be able to navigate to Add New Company Page", function()
    {
  
      cy.get('[data-cy=single-table-action-button]').click()
      
    })

    it("At Add Company page each field should have proper label and validations", () => {
      //label validations Detail section
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').first().should('be.visible').and('contain.text','Company Name')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(1).should('be.visible').and('contain.text','Phone Number')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(2).should('be.visible').and('contain.text','Status')
      /*
      cy.get('[data-cy=addCompanyFormCancelLink]').should('be.visible').and('contain.text','Cancel')
      cy.get('[data-cy=addCompanyFormNextButton]').should('be.visible').click()
      cy.get('[data-cy=addCompanyFormPreviousButton]').scrollIntoView().should('be.visible').click()
      */
      //field validations 
      cy.get('[data-cy=companyName]').should('be.visible').clear().type('asdasda').clear()
      cy.contains('Enter a company name')
      cy.get('[data-cy=companyContact]').should('be.visible').clear().type('1234868').clear()
      cy.contains('Invalid phone number') 
      cy.get('[data-cy=addCompanyFormNextButton]').should('be.visible').click()
      //label validation Address section
      cy.get('.ant-steps-item-title').should('be.visible')
      cy.get(':nth-child(1) > .section-heading > span').should('be.visible').and('contain.text','Service Address')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').first().should('be.visible').and('contain','Country')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(1).should('be.visible').and('contain','State')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(2).should('be.visible').and('contain','City')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(3).should('be.visible').and('contain','Street')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(4).should('be.visible').and('contain','Postal Code')
      //field validation 
      cy.get('[data-cy=companyAddCheckbox] > :nth-child(2)').should('be.visible').and('contain.text','Same as service address')
      cy.get('.ant-checkbox-input').check().should('be.checked')
      cy.get('.ant-checkbox-input').uncheck().should('not.be.checked')
      cy.get('[data-cy=companyCity]').should('be.visible').clear().type('ytiuewtkj').clear()
      cy.contains('Enter a valid city')
      cy.get('[data-cy=companyStreet]').should('be.visible').clear().type('hjashdgkjgsHb').clear()
      cy.contains('Enter a Street')
      cy.get('[data-cy=companyPostalCode]').should('be.visible').clear().type('765827603472').clear()
      cy.contains('Enter a valid postal code')
      cy.get(':nth-child(5) > .section-heading > :nth-child(1)').should('be.visible').and('contain.text','Billing Address')
      /*
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').should('be.visible').and('contain','Country')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(1).should('be.visible').and('contain','State')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(2).should('be.visible').and('contain','City')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(3).should('be.visible').and('contain','Street')
      cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(4).should('be.visible').and('contain','Postal Code')
      */
      cy.get('[data-cy=addCompanyFormCancelLink]').should('be.visible').and('contain.text','Cancel') //cancel button
      cy.get('[data-cy=addCompanyFormPreviousButton]').should('be.visible').click() //previouspage
      cy.get('[data-cy=addCompanyFormNextButton]').should('be.enabled').click() //next page
  
    })

      it('As an admin I should be able to navigate to the Admin section',function(){
        cy.get('[data-cy=addCompanyFormNextButton]').click()
        cy.get(':nth-child(1) > :nth-child(1) > .ant-form-item > .ant-form-item-label > .ant-form-item-required').should('be.visible').and('contain','First Name')
      cy.get('[data-cy=companyEmployeeFirstName]').should('be.visible').clear().type('yugfrevaj').clear()
      cy.get(':nth-child(1) > :nth-child(2) > .ant-form-item > .ant-form-item-label > ').should('be.visible').and('contain.text','Last Name')
      cy.get('[data-cy=companyEmployeeLastName]').should('be.visible').clear().type('nkjjfljsglj').clear()
      cy.get(':nth-child(2) > :nth-child(1) > .ant-form-item > .ant-form-item-label > .ant-form-item-required').should('be.visible').and('contain.text','Mobile Phone')
      cy.get('[data-cy=companyEmployeeOfficePhone]').should('be.visible').clear().type('78638648790999279').clear()
      cy.contains('Enter a valid phone number')
      cy.get(':nth-child(2) > :nth-child(2) > .ant-form-item > .ant-form-item-label >').should('be.visible').and('contain.text','Office Phone')
      cy.get('[data-cy=companyEmployeeHomePhone]').should('be.visible').clear().type('147').clear()
      cy.contains('Home phone cannot be same as office phone')
      cy.get(':nth-child(3) > :nth-child(1) > .ant-form-item > .ant-form-item-label > ').should('be.visible').and('contain.text','Email')
      cy.get('[data-cy=companyEmployeeEmail]').should('be.visible').clear().type('hehfsljgl:@nkjdfbjhsfl').clear()
      cy.contains('Enter a valid email')
      cy.get(':nth-child(3) > :nth-child(2) > .ant-form-item > .ant-form-item-label > .ant-form-item-required').should('be.visible').should('contain.text','Role')
      cy.get('[data-cy=companyEmployeeRole] > .ant-select-selection > .ant-select-selection__rendered').should('not.be.enabled')
      cy.get(':nth-child(4) > .ant-col-12 > .ant-form-item > .ant-form-item-label > ').should('be.visible').and('contain.text','Status')
      cy.get('[data-cy=companyEmployeeStatus] > .ant-select-selection > .ant-select-selection__rendered').should('not.be.enabled')
      cy.get('[data-cy=addCompanyFormCancelLink]').should('be.visible').and('contain.text','Cancel')
      cy.get('[data-cy=addCompanyFormPreviousButton]').should('be.visible').and('contain.text','Previous').click()

  }) 

  it('As an admin I should be able to navigate to the company listing page',function(){
    cy.get('.ant-menu-item-selected > a').click()
})
  it('As an Admin I should be able to search companies via search bar',function(){
    cy.get('[data-cy=app-searchbar]').clear().should('be.visible').type('Alpha').click(['enter'])
  })
  it('If I search invalid data via search bar then no data found such message should appear',function(){
    cy.get('[data-cy=app-searchbar]').clear().should('be.visible').type('jhfkajgla').click(['enter'])
  })
  it('As a superadmin I should be able to successfully logout',function(){
    cy.get('.header-profile-image > img').click()
    cy.get('[data-cy=logout]').click()
  
  })/*
  it('As a superAdmin I should be able to navigate to the forgot password page',function(){
    cy.get('.login-form-forgot').should('be.visible').click()
  })*/

})