import {When, And, Then } from 'cypress-cucumber-preprocessor/steps';


before(()=>{
    cy.visit("https://demoqa.com/automation-practice-form");
})

When("I enter my {string}", (myFirst_name) => {
    cy.get('#firstName').type(myFirst_name)
 
  });

 
 When("I enter as {string}", (mySecond_name) => {
     cy.get('#lastName').type(mySecond_name)
    
  });

  

And("my email address",() => {
    cy.get('#userEmail').type("my_email234@gmail.com")

  });

 

And("my personal {string}", (my_Gender) => {
    cy.get('.custom-control.custom-radio.custom-control-inline').each(($ele)=>{

        if($ele.text().includes(my_Gender)){
            cy.wrap($ele).click();

        }

    })
  

  });


When("I enter phone number", () => {
    cy.get('#userNumber').type("0797566318")
    
  });


And("my date of birth for {string} for {string} for {string}", (myMonth, myDay, myYear) => {
    cy.get('#dateOfBirthInput').click();
    cy.get('select.react-datepicker__month-select').select(myMonth) 

    cy.get('select.react-datepicker__year-select').select(myYear)

    cy.get('.react-datepicker__day').each(($ele)=>{
        if($ele.text().includes(myDay)){
            ($ele).click();
        }

    })
 
  });

 

And(/^I select my "([^"]*)"$/, (my_Subject) => {
  cy.get('#subjectsContainer').type(my_Subject).then(()=>{
      
    cy.get('#subjectsContainer').then((ele)=>{
            var textValue= ele.text()
                if(textValue.includes(my_Subject)){
                  cy.get('#subjectsContainer').type(my_Subject +'{enter}')
                

                }
            
        

       
        
   

    })


  }); 

 

And(/^my personal hobby "([^"]*)"$/, (my_Hobbies) => {
    cy.get('.custom-checkbox').each(($ele, index)=>{
        
        if($ele.text().includes(my_Hobbies)){
            cy.get('.custom-checkbox').eq(index).click();
        }

    })
  });



And(/^my current address is address$/, () => {
    cy.get('#currentAddress').type("26, st. Donnats Road")
  });


And(/^select my state "([^"]*)" and "([^"]*)"$/, ( my_State, my_City) => {
    cy.get('#state .css-1wa3eu0-placeholder').type( my_State + '{enter}' );

   cy.get('#city').type(my_City + '{enter}' );
            

        })
    })

And(/^sumit details$/, () => {
    cy.get('#submit').click();
 

    
  });

  Then(/^I confirm form sumbmission message$/, () => {
    cy.get('#example-modal-sizes-title-lg').then((ele)=> {

      expect(ele.text()).to.equal('Thanks for submitting the form')

    })
    
  });

  Then(/^I could vrify selected  "([^"]*)"$/, (my_Subject) => {
    cy.get('tbody > :nth-child(6) > :nth-child(2)').then((ele)=> {
      expect(ele.text()).to.equal(my_Subject)

    })


  Then(/^I could vrify my names "([^"]*)"$/, (mySecond_name) => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').then((ele)=> {
      expect(ele.text()).to.includes(mySecond_name)

    })

  });

  Then(/^I could verify gender as "([^"]*)"$/, (my_Gender) => {
    cy.get('tbody > :nth-child(3) > :nth-child(2)').then((ele)=> {
      expect(ele.text()).to.equal(my_Gender )
    
     

    })
   
  });

  Then(/^I could verify hobbies as "([^"]*)"$/, (my_Hobbies) => {
    cy.get('tbody > :nth-child(7) > :nth-child(2)').then((ele)=> {
      expect(ele.text()).to.equal(my_Hobbies )

    })
    

  });

  Then(/^I could verify state and city as "([^"]*)"$/, (my_StateAndCity) => {
    cy.get('tbody > :nth-child(10) > :nth-child(2)').then((ele)=> {
      expect(ele.text()).to.equal( my_StateAndCity )
    })
    

  });

  And(/^close the window$/, () => {
    cy.get('#closeLargeModal').click();
    
  }); 
});