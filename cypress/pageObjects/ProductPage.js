class ProductPage {
    addFirstProductToCart() {
      cy.get(':nth-child(1) > :nth-child(4) > .productName').click(); // Select the first product
      cy.get('[name="save_to_cart"]').click(); // Add to Cart
    }
  }
  
  export default new ProductPage();
  