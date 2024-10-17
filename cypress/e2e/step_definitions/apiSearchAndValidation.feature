Feature: Product Search

Scenario: Search for a product
    Given the user wants to search for a product
    When the user sends a GET request searching for "tablet"
    Then the response status code should be 200
    And the response should contain only products with categoryId 3