Feature: Access user shopping cart

  Scenario: Verify access to the user shopping cart
    Given the user is authenticated
    When the user requests access to their shopping cart
    Then the response status code should be 200
