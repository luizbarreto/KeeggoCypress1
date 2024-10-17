import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pageObjects/HomePage';
import ProductPage from '../../../pageObjects/ProductPage';
import CartPage from '../../../pageObjects/CartPage';

Given('I visit the homepage', () => {
  HomePage.visit();
});

When('I search for a product', () => {
  HomePage.searchForProduct('tablet');
});

And('I add the product to the cart', () => {
  ProductPage.addFirstProductToCart();
});

Then('I should see the product in the checkout', () => {
  CartPage.openCart();
  CartPage.verifyProductInCart();
  CartPage.proceedToCheckout();
});
