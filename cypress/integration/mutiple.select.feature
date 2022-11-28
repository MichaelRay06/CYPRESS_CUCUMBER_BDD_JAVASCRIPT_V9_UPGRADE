Feature: selecting multiple product module

Background: 
Given I am on test automationstore


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
        

          @mutilSelect
         Scenario Outline: caculating the total price of a selected item

                When I mouse over items "<menu>" and click on "<subMenu>"
                And I to make mutiple items "<selectedItems>"
                And click on menu cart button
                And I update the cart table
                Then I could verify the total amount paid
                Examples:
                        | menu      | subMenu        | selectedItems                    |
                        | Men       | Fragrance Sets | MAN Eau de Toilette Spray        |
                        | Hair Care | Conditioner    | Brunette expressions Conditioner |
                        | Men       | Fragrance Sets | Armani Code after shave balm     |
                        | Hair Care | Conditioner    | Highlighting Expressions         |




