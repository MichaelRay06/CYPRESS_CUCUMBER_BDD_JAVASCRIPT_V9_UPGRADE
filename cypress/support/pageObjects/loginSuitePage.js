class loginSuitePage{

    
    loginTest(loginID, password){
        cy.get("#loginFrm_loginname").clear();
        cy.get("#loginFrm_loginname").type(loginID)
        cy.get('#loginFrm_password').clear();
        cy.get('#loginFrm_password').type(password)
        cy.get('form#loginFrm>fieldset>button').click();
    }
}
export default new loginSuitePage();