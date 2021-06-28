///<reference types='cypress'/>
import faker from 'faker'
describe("test", () => {
    const fname = faker.name.firstName()
    const address = faker.address.streetAddress()
    const streetname = faker.address.streetName()
    const email = faker.internet.email()
    it("how to check data into the field", () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.wait(3000)
        /*
        cy.xpath("//input[@placeholder='First Name']").type(fname)
        */
        cy.get('.col-md-8 > .form-control').type(streetname)
        cy.get('#eid > .form-control').type(email)
    })
})