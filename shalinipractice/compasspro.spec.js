///<reference types='cypress'/>
const data = require('../../fixtures/data.json')
describe("super admin Test cases", () => {
    it("As a Super Admin I should be able to login", () => {
        cy.login(data.OrgAdmin_url, data.superAdmin_username, data.superAdmin_password);
    })
    it("As a Super Admin I should be able to navigate on Company Listing page", () => {
        cy.get('[ng-reflect-nz-title="Companies"] > a').should('be.visible').click()
        cy.get('.title-container').should('be.visible').and('contain.text', 'Companies')
    })
    it("As a Super Admin I should be able to navigate on Add Company page", () => {
        cy.get('[data-cy=single-table-action-button]').should('be.visible').click()
        cy.get('.title-container').should('be.visible').and('contain.text','Add New Company')
    })
    it("At Add Company page each field should have proper label and validations", () => {
        //label validations
        cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').first().should('be.visible').and('contain.text','Company Name')
        cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(1).should('be.visible').and('contain.text','Phone Number')
        cy.get(' .ant-form-item > .ant-form-item-label > .ant-form-item-required').eq(2).should('be.visible').and('contain.text','Status')
        cy.get('[data-cy=addCompanyFormCancelLink]').should('be.visible').and('contain.text','Cancel')
        cy.get('[data-cy=addCompanyFormNextButton]').should('be.visible').click()
        cy.get('[data-cy=addCompanyFormPreviousButton]').scrollIntoView().should('be.visible').click()
        //field validations 
        cy.get('[data-cy=companyName]').should('be.visible').clear().type('asdasda').clear()
        cy.contains('Enter a company name')
        cy.get('[data-cy=companyContact]').should('be.visible').clear().type('1234868').clear()
        cy.contains('Invalid phone number') 
    })
})