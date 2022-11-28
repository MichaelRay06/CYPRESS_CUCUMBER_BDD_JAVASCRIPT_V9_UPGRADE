class MyAccountPage{


    firstNameEdited(){
      return cy.get('.subtext')
    }



    accountUpdated(){
    return  cy.get('.alert')
     
     
    }



logMeOut(){
 cy.get('.side_account_list > li:nth-of-type(10) > a').click();
}



}
export default new  MyAccountPage();
     