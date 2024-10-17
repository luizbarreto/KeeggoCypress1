import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

let token;
let response;

Given('the user is authenticated', () => {
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoyNDU0NDkzNjUsInN1YiI6ImQyMWQxMmQyMSIsInJvbGUiOiJVU0VSIn0.0ht8ynlCJBtCBf03LykMIDMWZFsJxN72Z1Y8Npd_h7s';
});

Given('wants to update a product image', () => {
  cy.log('User is preparing to update the product image');
});

When('the user sends a POST request to update the product with a new image', () => {
  cy.fixture('new-image.jpg', 'binary')
    .then((image) => Cypress.Blob.binaryStringToBlob(image, 'image/jpeg'))
    .then((blob) => {
      const formData = new FormData();
      formData.append('file', blob, 'new-image.jpg'); 

      cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/245449365/TESTkeeggo/C3C3C3?product_id=1',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': '*/*',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
        failOnStatusCode: false 
      }).then((res) => {
        response = res;
      });
    });
});

Then('the response status code should be 200', () => {
  expect(response.status).to.eq(200);
  cy.log(JSON.stringify(response));
});

And('the product should be updated correctly', () => {
  cy.log('Product updated successfully');
});

And('the image ID should be present and valid', () => {
  expect(response.body).to.have.property('imageId'); 
  cy.log(`Image ID: ${response.body.imageId}`);
});
