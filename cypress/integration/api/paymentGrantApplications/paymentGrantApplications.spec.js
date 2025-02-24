describe('Payment and Grant Applications', () => {

  it('Validation of grant eligibility', () => {
    cy.request({
      method: 'POST',
      url: 'url', // Endpoint to be updated as per the application
      body: {
        propertyId: '1', 
        incomeLevel: 'low',  
        heatingDemand: 2000,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('eligibleForGrant').that.equals(true); 
      expect(response.body).to.have.property('outOfCost').that.is.a('number'); 
    });
  });

});
