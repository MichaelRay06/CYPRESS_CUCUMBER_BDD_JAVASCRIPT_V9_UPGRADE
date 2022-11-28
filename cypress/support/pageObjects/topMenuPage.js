

class TopMenuPage{


    updateChatTable(){
        cy.get('button#cart_update').click()
    }



tableTotalRow(){
    var sum=0;
var shipPrice=0;
var totalPricePaid=0;
var theTotalPricePaid=0;

   cy.get('tr> td:nth-of-type(6)').each((ele)=>{
       var value = ele.text().replace('$','')
       sum= Number(sum) + Number(value)
      

       cy.get('table#totals_table tr:nth-child(2) td:nth-child(2) span.bold').then((ele) =>{
        var shipping= ele.text().replace('$', '');

        shipPrice= Number(shipPrice)+ Number(shipping)

        totalPricePaid= Number(sum) + Number(shipPrice);
        theTotalPricePaid=Number(theTotalPricePaid)+(totalPricePaid)
        


        cy.get('#totals_table td:nth-of-type(2) .totalamout').then((ele)=> {

            var total = ele.text().replace('$', '')
            const totalAmount= total.substring(0)
           expect(Number(totalAmount)).to.equal(theTotalPricePaid);

           

           })
    
})


   });
  
}

/* totalAmount(){
   cy.get('#totals_table td:nth-of-type(2) .totalamout').then((ele)=> {

    var totalAmount = ele.text().replace('$', '')
    cy.log('totalAmount is: '+ Number(totalAmount));
   })
} */



}
export default new TopMenuPage();