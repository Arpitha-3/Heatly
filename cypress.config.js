module.exports = {
  e2e: {
    // Specify the base URL for the API requests
    baseUrl: 'https://jsonplaceholder.typicode.com', // Update with your API base URL

    // Set up the default timeout for requests, as API responses might take a little longer than typical UI actions
    requestTimeout: 10000, // 10 seconds (default is 5000 ms)

    // Set up a custom timeout for waiting for the response of a request
    responseTimeout: 15000, // 15 seconds (default is 30000 ms)

    // Enable or disable screenshots and videos (you can disable for API testing to speed up tests)
    screenshotOnRunFailure: false, // Disable screenshot on failure for API tests
    video: false, // Disable video recording for API tests to reduce overhead

    // Set up the test files pattern, which can help organize your tests (you might already have `api` folder)
    specPattern: 'cypress/integration/api/**/*.spec.js', // Only run tests in the 'api' folder

    // If you're using environment variables, you can set them here
    env: {
      apiKey: 'your-api-key-here', // You can use environment variables for API keys or authentication tokens
      otherConfig: 'value', // Any other custom configuration
    },

    // Optionally, configure a custom support file for global commands or setups (you can use it for API mocking)
    supportFile: false, // Default file for custom commands
  },
};
