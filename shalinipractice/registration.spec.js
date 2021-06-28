/// <reference types="Cypress" />

describe('Check Checkbox', function(){

    it('Hobbies Checkbox', function(){

    cy.visit("http://demo.automationtesting.in/Register.html")

    cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
    cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
    cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

    cy.get('#checkbox1').uncheck().should('not.be.checked')
    cy.get('#checkbox2').uncheck().should('not.be.checked')
    cy.get('#checkbox3').uncheck().should('not.be.checked')

    //single comment for selection of multiple checkboxes
    cy.get('input[type=checkbox]').check(['Hockey','Movies'])
}) 
    it('')
/*
    it('Skills dropdown',()=> {
        cy.get('#Skills').select('Android').should('have.value','Android')
        })
    it('Languages Multi select',function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').type('Ind')
        cy.get('.ui-corner-all').type('{enter}')
        
    })  */  
    
})
