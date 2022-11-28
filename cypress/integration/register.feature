Feature: filling registration form


    Scenario Outline: I could register

        When I enter my "<myFirst_name>"
        When I enter as "<mySecond_name>"
        And my email address
        And my personal "<my_Gender>"
        When I enter phone number
        And my date of birth for "<myMonth>" for "<myDay>" for "<myYear>"
        And I select my "<my_Subject>"
        And my personal hobby "<my_Hobbies>"
        And my current address is address
        And select my state "<my_State>" and "<my_City>"
        And sumit details
        Then I confirm form sumbmission message
        Then I could vrify selected  "<my_Subject>"
        Then I could vrify my names "<mySecond_name>"
        Then I could verify gender as "<my_Gender>"
        Then I could verify hobbies as "<my_Hobbies>"
        Then I could verify state and city as "<my_StateAndCity>"
        And close the window

        Examples:
            | myFirst_name | mySecond_name | my_Gender | myMonth | myDay | myYear | my_Subject | my_Hobbies | my_State | my_City | my_StateAndCity |
            | mike         | mike          | Female    | October | 7     | 2018   | Maths      | Sports     | Haryana  | Panipat | Haryana Panipat |




    Scenario: Using data table with cypress
        Given I am on text box site
        And I enter my datails as
            | Full_Name | Email                   | Current_Address    | Permanent_Address    |
            | Michael   | michaelRay343@gmail.com | 30 pevenscey court | waborn groove london |
        And I submit the details
        Then I could verify my_FullName
        Then I could verify my current address
