class LoginPage{

    verifyUserName(){
     return  cy.get('div.menu_text')
        
    }

    logOut(){
        cy.get('div.menu_text').trigger('mouseover')
        cy.contains('Not michael? Logoff').click();

        
        //OR
        //cy.contains('Welcome back michael').trigger('mouseover')
        //cy.contains('Not michael? Logoff').click();
    }

    editMyAccount(){
        cy.get('div.menu_text').trigger('mouseover')
        cy.get('.dropdown-menu.sub_menu > li:nth-of-type(3) > a').click();
    }




}
export default new LoginPage;