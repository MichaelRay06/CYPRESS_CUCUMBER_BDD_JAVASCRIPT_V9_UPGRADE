Feature: testing the automationstore log in module.


        @login
        Scenario Outline: As a user I should be able to log in into the siie and verify my user name.

                And I type my user name as "<loginID>"
                And I type in my password as "<password>"
                When I click the log in button
                Then I could verify my account user name as "<expectedResult>"

                Examples:
                        | loginID  | password | expectedResult                               |
                        | 54SGod54 | 54SGod54 | Unknown error encountered. Please try again! |
                        | 54SGod54 | 54SGod54 | Unknown error encountered. Please try again! |
                        | 54SGod54 | 54SGod54 | Unknown error encountered. Please try again! |
                        | 54SGod54 | 54SGod54 | Unknown error encountered. Please try again! |



                        
    Scenario Outline: caculating the total price of a selected item
        
        When I mouse over items "<menu>" and click on "<subMenu>"
        And I to make mutiple items "<selectedItems>"
        And click on menu cart button
        And I update the cart table
        Then I could verify the total amount paid
        Examples:
            | menu                  | subMenu        | selectedItems                            |
            | Men                   | Fragrance Sets | MAN Eau de Toilette Spray                |
            | Hair Care             | Conditioner    | Brunette expressions Conditioner         |
            | Men                   | Fragrance Sets | Armani Code after shave balm             |
            | Hair Care             | Conditioner    | Highlighting Expressions                 |
        






       