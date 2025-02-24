Cypress.Commands.add('getPropertyDetails', (propertyId) => {
  cy.request({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/users/1`,
    qs: { propertyId }, // Dynamically pass property ID
  }).then((response) => {
    return response.body; // Return the response data for further validation
  });
});
