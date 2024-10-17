import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps';

Given('the user wants to search for a product', () => {
});

When('the user sends a GET request searching for "tablet"', () => {
  cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=tablet').as('searchResponse');
});

Then('the response status code should be 200', () => {
  cy.get('@searchResponse').its('status').should('eq', 200);
});

And('the response should contain only products with categoryId 3', () => {
  cy.get('@searchResponse').then((response) => {
    expect(response.body).to.be.an('array').that.is.not.empty; 
    const category = response.body[0];
    expect(category).to.have.property('products'); 
    expect(category.products).to.not.be.empty; 
    category.products.forEach((product) => {
      expect(product.categoryId).to.eq(3); 
    });
  });
});