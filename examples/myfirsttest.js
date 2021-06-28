describe('MyTestSuite', function()
{
      it ('verify Title of the Page', function()
      {
          cy.visit('https://www.nopcommerce.com/en/demo')
          cy.title().should('eq','nopCommerce Store Demo')
      })
})