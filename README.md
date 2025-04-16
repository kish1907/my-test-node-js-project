# Node.js API to Add Two Numbers

## Overview

This is a simple Node.js API built with Express.js that provides an endpoint to add two numbers. It includes unit tests written using Mocha and Supertest.

## Features

- **POST /add**: Accepts two numbers in the request body and returns their sum.
- Input validation to ensure both inputs are numbers.
- Unit tests to verify the functionality of the API.

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```bash
   cd my-test-project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node index.js
   ```
2. The server will run on `http://localhost:3000`.
3. Use an HTTP client (e.g., Postman, cURL) to test the API.

### Example Request

**POST** `http://localhost:3000/add`

**Request Body:**

```json
{
  "num1": 5,
  "num2": 10
}
```

**Response:**

```json
{
  "sum": 15
}
```

### Example cURL Command

You can use the following cURL command to test the API:

```bash
curl -X POST http://localhost:3000/add \
     -H "Content-Type: application/json" \
     -d '{"num1": 5, "num2": 10}'
```

This will return:

```json
{
  "sum": 15
}
```

## Running Tests

1. Run the unit tests:
   ```bash
   npx mocha test/index.test.js
   ```
2. All tests should pass successfully.

### Running Unit Tests

To ensure the API works as expected, you can run the unit tests using the following command:

```bash
npx mocha test/index.test.js
```

This will execute all the test cases and provide the results in the terminal.

## Project Structure

```
my-test-project/
├── index.js          # Main application file
├── package.json      # Project metadata and dependencies
└── test/
    └── index.test.js # Unit tests for the API
```

## Dependencies

- [Express.js](https://expressjs.com/): Web framework for Node.js
- [Mocha](https://mochajs.org/): Test framework for Node.js
- [Supertest](https://github.com/visionmedia/supertest): HTTP assertions for testing

## License

This project is licensed under the MIT License.
