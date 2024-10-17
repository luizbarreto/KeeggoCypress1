class CartPage {
    openCart() {
      cy.get('#shoppingCartLink').click(); // Click on the cart icon
    }
  
    verifyProductInCart() {
      cy.get('li > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding')
        .should('exist'); // Verify product exists in cart
    }
  
    proceedToCheckout() {
      cy.get('li > #toolTipCart > :nth-child(1) > table > tfoot > :nth-child(2) > td > #checkOutPopUp').click(); // Checkout
      cy.get(':nth-child(5) > .roboto-bold').should('be.visible'); // Verify redirection to payment page
    }
  }
  
  export default new CartPage();
  