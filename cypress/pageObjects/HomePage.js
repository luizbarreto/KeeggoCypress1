class HomePage {
    visit() {
      cy.visit('/');
    }
  
    searchForProduct(productName) {
      cy.get('#mobileSearch > .roboto-medium').click(); // Click search button
      cy.get('#autoComplete').type(`${productName}{enter}`, { force: true }); // Type product name and press Enter
    }
  }
  
  export default new HomePage();
  