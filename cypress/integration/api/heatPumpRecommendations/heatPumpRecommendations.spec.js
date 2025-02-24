describe('Heat Pump Recommendation', () => 
  {
  it('Recommended Heatpump should be considered', () => {
    cy.request({
      method: 'GET',
      url: 'url', //Required endpoint has to be updated
      qs: {
        heatLoss: '2000',
        propertyType: 'semidetached', 
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('recommended'); 
    });
  });

});
