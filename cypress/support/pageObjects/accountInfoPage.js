class AccountInfoPage{


editFirstName(firstName){
    cy.get('#AccountFrm_firstname').clear()
    cy.get('#AccountFrm_firstname').type(firstName)
}

countinueButton(){
    cy.get('form#AccountFrm>div:nth-of-type(2)>div>button').click();
}



}
export default new AccountInfoPage();