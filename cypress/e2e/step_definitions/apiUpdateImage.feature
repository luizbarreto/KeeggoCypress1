Feature: Update Product Image

  Scenario: Update the image of a product
    Given the user is authenticated
    And wants to update a product image
    When the user sends a POST request to update the product with a new image
    Then the response status code should be 200
    And the product should be updated correctly
    And the image ID should be present and valid
