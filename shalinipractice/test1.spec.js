/// <reference types="cypress" />

describe('facebook', function()
{
    it('facebook login', function()
    {
        cy.visit("https://www.facebook.com/")
        cy.url().should('include','facebook')
        cy.get('#email').should('be.visible').should('be.enabled').type("7017355865")
        cy.get('#pass').should('be.visible').should('be.enabled').type("Kdp@0987")
        cy.get('#loginbutton').click()
    })


    it('forgotpassword', function()

    {
        cy.get(':nth-child(2) > div > a').click()
    }
    )

}
)