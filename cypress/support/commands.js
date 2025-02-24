Cypress.Commands.add('getPropertyDetails', (propertyId) => {
    cy.request({
      method: 'GET',
      url: `https://api.example.com/property/details`,
      qs: { propertyId }, // Dynamically pass property ID
    }).then((response) => {
      return response.body; // Return the response data for further validation
    });
  });
  