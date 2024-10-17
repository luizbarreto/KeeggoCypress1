import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let token;
let response;

Given('the user is authenticated', () => {
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoyNDU0NDkzNjUsInN1YiI6ImQyMWQxMmQyMSIsInJvbGUiOiJVU0VSIn0.0ht8ynlCJBtCBf03LykMIDMWZFsJxN72Z1Y8Npd_h7s';
});

When('the user requests access to their shopping cart', () => {
    cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/order/api/v1/carts/245449365',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': '*/*'
        },
        failOnStatusCode: false 
    }).then((res) => {
        response = res;
    });
});

Then('the response status code should be 200', () => {
    expect(response.status).to.eq(200);
});
