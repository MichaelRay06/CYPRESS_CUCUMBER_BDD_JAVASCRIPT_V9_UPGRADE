class HomePage{

    /* loginButton(){
        cy.get('ul#main_menu_top>li:nth-of-type(2)>a>span').trigger('mousemove')
        cy.get('LOGIN').click();
    } */


      


    loginNameTextField(loginID){
        cy.get("#loginFrm_loginname").clear();
        cy.get("#loginFrm_loginname").type(loginID)
    }
  
    passwordTextFiels(password){
        cy.get('#loginFrm_password').clear();
        cy.get('#loginFrm_password').type(password)

    }
    loginButton(){
        cy.get('form#loginFrm>fieldset>button').click();
    }

    notLogInAlert(){
      return   cy.get('.alert')
    }
}
//export default HomePage;
export default new HomePage();