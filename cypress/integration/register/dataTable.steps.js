import {When, And, Then } from 'cypress-cucumber-preprocessor/steps';


Given("I am on text box site", ()=>{
    cy.visit("https://demoqa.com/text-box")
   

})

And("I enter my datails as", (datatable)=> {
    datatable.hashes().forEach((element)=> {
        cy.get('#userName').type(element.Full_Name)
        cy.get('#userEmail').type(element.Email)
        cy.get('textarea#currentAddress').type(element.Current_Address)
        cy.get('textarea#permanentAddress').type(element.Permanent_Address)
        
    })

})
And("I submit the details", ()=> {
    cy.get('#submit').click();

})

Then("I could verify my_FullName", ()=> {
    cy.get('#name').then((ele)=> {
        expect(ele.text()).to.equal('Name:Michael')

    })

})


Then("I could verify my current address", ()=> {
    cy.get('.border > #currentAddress').then((ele)=>{
        expect(ele.text()).to.includes('30 pevenscey court')

    })

    
})