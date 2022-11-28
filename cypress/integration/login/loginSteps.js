import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

import home_Page from '../../support/pageObjects/homePage'

before({tags:"@mutilSelect"}, ()=> {
  cy.navigateTo_Url();
  cy.clearCookies_LocalStoreage();
})


And(/^I type my user name as "([^"]*)"$/, (loginID) => {
  home_Page.loginNameTextField(loginID)
});



And(/^I type in my password as "([^"]*)"$/, (password) => {
 home_Page.passwordTextFiels(password)
});



When(/^I click the log in button$/, () => {
  home_Page.loginButton();
});



Then(/^I could verify my account user name as "([^"]*)"$/, (expectedResult) => {
home_Page.notLogInAlert().then((ele)=>{
  var actualResult= ele.text();
     expect(actualResult).to.contains(expectedResult)
})
  

  })
    
 

  



    
    

      

