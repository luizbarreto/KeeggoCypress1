Feature: Advantage Online Shopping product search and checkout

Scenario: Adding a product to the cart and validate it on checkout
  Given I visit the homepage
  When I search for a product
  And I add the product to the cart
  Then I should see the product in the checkout