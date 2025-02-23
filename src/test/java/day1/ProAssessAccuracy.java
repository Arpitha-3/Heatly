package day1;

import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import org.json.JSONObject;
import io.restassured.path.json.JsonPath; 
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ProAssessAccuracy{
   @Test
    public void PropertyAssertionsAccu()
   {
	   Response response = given() 
	   		 .get("") 
	         .then()
       		 .statusCode(200)
      		 .body("age", notNullValue())
       		 .body("insulation", notNullValue())
       		 .body("EPC_rating", notNullValue())
       		 .log().all()
	       	 .extract()
	         .response();
	   
	         String responseBody = response.getBody().asString();
	         JSONObject jsonResponse = new JSONObject(responseBody);

		     double heatLoss = jsonResponse.getDouble("heat_loss");   
		     Assert.assertTrue(heatLoss > 0, "Heat loss should be greater than zero.");
		     Assert.assertNotNull(response.jsonPath().getString("EPC_rating"), "EPC rating should not be null");
    }



    @Test
    public void heatPump() {
        ValidatableResponse response = given()
                			.when()
                			.get("url  required to extract the input required")  
                			.then()
			          		.statusCode(200)
			           		.body("recommended_pump.model", notNullValue())
			          		.body("recommended_pump.size", greaterThan(0));
    }

    @Test
    public void costCalculation()
 {
    	Response vr = given()
    		    .get("url required to extract the input required")
    		    .then()
    		    .statusCode(200)
             	.log().all()
    			.extract()   // Extract the response
    			.response(); 
    	
        String responseBody = vr.asString();
      
        JSONObject jsonResponse = new JSONObject(responseBody);

        Assert.assertTrue(jsonResponse.getDouble("cost.equipment") > 0, "Equipment cost should be valid.");
        Assert.assertTrue(jsonResponse.getDouble("cost.modifications") > 0, "Modification cost should be valid.");

        JsonPath jsonPath = vr.jsonPath();

        double shortTermSavings = jsonPath.getDouble("energy_savings.short_term");

        double longTermSavings = jsonPath.getDouble("energy_savings.long_term");

        Assert.assertTrue(shortTermSavings > 0, "Short-term savings should be valid.");
        Assert.assertTrue(longTermSavings > 0, "Long-term savings should be valid.");
  
  }


    @Test
    public void testInstallerScheduling() {
    	        when()
        	    .get("url  required to extract the input required")  
                .then()
                .statusCode(200)
               	.body("schedule.date", notNullValue())
                .body("status", matchesPattern("status to be validated are pending :in-progress: completed"));
    }

        @Test
    public void PaymentAndGrants() {
        	Response vr = given()
        		.header("content Type", "server")
                .when()
          	    .get("url  required to extract the input required")  
                .then()
                .statusCode(200)
                .log().all()
                .extract()   // Extract the response
    			.response(); 
    
        String responseBody = vr.asString();
     
        JSONObject jsonResponse = new JSONObject(responseBody); 
		Assert.assertNotNull(jsonResponse.optBoolean("grant_eligibility"), "Grant eligibility should be determined.");
		Assert.assertEquals(jsonResponse.getString("payment_status"), "successful", "Payment status should be successful.");  
  }
}
