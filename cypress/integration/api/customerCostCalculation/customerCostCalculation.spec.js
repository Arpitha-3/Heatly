describe('Customer Cost API', () => {
  
  it('should correctly calculate installation cost', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.example.com/customer/cost', // API endpoint for customer cost calculation
      qs: {
        propertyId: '12345', // Example query parameter for property
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Check if the status code is 200
      expect(response.body).to.have.property('installationCost'); // Check if 'installationCost' exists
      expect(response.body.installationCost).to.be.a('number'); // Ensure it's a number
    });
  });

});
