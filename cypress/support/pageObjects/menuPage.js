class MenuPage{

    getMenuItems(menu,subMenu ){
        cy.contains(menu).click({force:true})
               cy.contains(subMenu).click({force:true});
    }

    selectItems(selectedItems){

        cy.get('.fixed_wrapper > .fixed > .prdocutname').each(($el, index)=> {
            if($el.text()===selectedItems){
                cy.get('.fa.fa-cart-plus.fa-fw').eq(index).click();

            }
        })
 
    }
    menu_cartButton(){
        cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
    }
}
export default new  MenuPage;
