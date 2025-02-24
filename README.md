# Heatly

A. Overview : The testScripts contains various validations of the application which includes ProperAssessmentAccuracy, InstallerScheduling and assignment, Customer Cost Calculation, HeatPump Recommendations, Payment and Grant Applications.

B. Pre-Requisities :

1. Url has to be mentioned as per teh application in all the testScripts.
2. Node.js
3. npm
4. Cypress

C. Folder Structure:

/cypress
    /integration\api
        >customerCostCalcution
        >heatPumpRecommendations
        >installerScheduling
        >paymentGrantApplications
        >propertyAssessment
    /fixtures
    /support

D.Setup
    Installation of Nodejs, cypress and all dependencies.

E.Execution:
    TestScripts has to be saved with ".cy.js" extension.
    commands: npx cypress open 
                 or
              npx cypress run --spec --"spec files relative path"   



