/// <reference types="Cypress" />
describe('Company test cases',function()
{
    it('As a super Admin I should be able to login',function()
    {
      cy.login('https://qa.markarian.build-release.com/login','aman@crownstack.com', 'password')
    })
})