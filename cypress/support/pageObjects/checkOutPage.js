class CheckOutPage{

    sumSelectedItems(){
      var sum= 0;
        var shippingPrice= 0;
        var totalPurchseSum=0;
        cy.get('tr:nth-of-type(2) > td:nth-of-type(2) > .bold').then((ele)=> {

           var shippingValue= ele.text().replace(',', '');
           shippingPrice= Number(shippingPrice)+(Number(shippingValue.substring(1)))


           cy.get('tr > .checkout_heading').each( ($element)=> {
            var textValue= $element.text().replace(',', '')
            var amount= (Number(textValue.substring(1)))
            sum= Number(sum)+Number(amount)

            totalPurchseSum= sum+shippingPrice

             cy.get('td:nth-of-type(2) .totalamout').then(function( el){
                var Value = el.text().replace(',','')
                const totalValue= Value.substring(1)
                expect(Number(totalValue)).to.equal(totalPurchseSum);

        }) 
    
            })
        })

    }




}
export default new CheckOutPage;