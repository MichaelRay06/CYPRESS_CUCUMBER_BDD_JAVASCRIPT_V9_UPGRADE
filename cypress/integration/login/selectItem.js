import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';


import  MenuPage from '../../support/pageObjects/menuPage' 
import TopMenuPage from '../../support/pageObjects/topMenuPage'



before( ()=> {
    cy.navigateTo_Url();
    cy.clearCookies_LocalStoreage();
  })
  

When("I mouse over items {string} and click on {string}", (menu, subMenu)=> {
    MenuPage.getMenuItems(menu,subMenu )

});

And("I to make mutiple items {string}",(selectedItems)=>{
    MenuPage.selectItems(selectedItems)


});

And("click on menu cart button",()=>{
    MenuPage.menu_cartButton();


});

And("I update the cart table",()=>{
    TopMenuPage.updateChatTable();

    
});

Then("I could verify the total amount paid",()=>{
    TopMenuPage.tableTotalRow();
  

    
});



  


