describe('Installer Scheduling & Project Workflow ', () => {
 
  before(() => {
    cy.fixture('testData').as('testData');
  });

 
  it('validation of transistion from assessment to installer', function() {
    cy.request({
      method: 'POST',
      url: 'url', // Required endpoint has to be updated as per the application
      body: {
        projectId: this.testData.projectId, 
        installerId: this.testData.installerData.id, 
      },
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('message', 'assigment completed successfully');
      expect(response.body).to.have.property('installerId', this.testData.installerData.id);
    });
  });

  
  it('installer availability', function() {
    cy.request({
      method: 'GET',
      url: `url${this.testData.installerData.id}`, // Endpoint has to be updated as reuired for installer availability
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('availability');
      expect(response.body.availability).to.include('Available'); 
    });
  });

 
  it('Installation Updates', function() {
    cy.request({
      method: 'GET',
      url: `url${this.testData.projectId}`, // Endpoint has to be updated as reuired for installation timeline
    }).then((response) => {
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('status', 'In Progress'); 
      expect(response.body).to.have.property('timeline'); 
      expect(response.body.timeline).to.include('Installation Started');
    });
  });
});
