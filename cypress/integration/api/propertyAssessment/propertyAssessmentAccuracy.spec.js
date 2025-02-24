describe('Property Assessment Accuracy', () => {
  
  it('should retrieve property details', () => {
    cy.request({
      method: 'GET',
      url: 'url',// should be replaced by required endpoint
      qs: { propId: '1' }, // Example property ID
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('age');
      expect(response.body).to.have.property('insulation');
      expect(response.body).to.have.property('epcRating');
    });
  });

   
  it('should retrieve property details', () =>
     {
    cy.getPropertyDetails('1').then((propertyData) => 
      {
      expect(propData).to.have.property('age');
      expect(propData).to.have.property('insulation');
      expect(propData).to.have.property('epcRating');
    });
  });

});
