# Node.js Calculator API

## Overview

This is a simple Node.js Calculator API built with Express.js that provides endpoints for basic arithmetic operations. It includes input validation, comprehensive unit tests written using Mocha and Supertest, and Swagger documentation.

## Features

- **POST /add**: Add two numbers
- **POST /subtract**: Subtract two numbers
- **POST /multiply**: Multiply two numbers
- Input validation to ensure both inputs are numbers
- Comprehensive unit tests for all endpoints
- Error handling for invalid inputs
- Swagger documentation for API exploration

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```bash
   cd my-test-node-js-project
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
3. Access the Swagger documentation at `http://localhost:3000/api-docs`.
4. Use an HTTP client (e.g., Postman, cURL) to test the API endpoints.

### API Documentation

The API is documented using Swagger 3.0 (OpenAPI). You can access the interactive documentation by visiting:
```
http://localhost:3000/api-docs
```

This provides a user-friendly interface to:
- Explore all available endpoints
- View request/response schemas
- Test the API directly from the browser
- Download the OpenAPI specification

### API Endpoints

#### 1. Addition
**POST** `/add`

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

**cURL Example:**
```bash
curl -X POST http://localhost:3000/add \
     -H "Content-Type: application/json" \
     -d '{"num1": 5, "num2": 10}'
```

#### 2. Subtraction
**POST** `/subtract`

**Request Body:**
```json
{
  "num1": 10,
  "num2": 5
}
```

**Response:**
```json
{
  "difference": 5
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:3000/subtract \
     -H "Content-Type: application/json" \
     -d '{"num1": 10, "num2": 5}'
```

#### 3. Multiplication
**POST** `/multiply`

**Request Body:**
```json
{
  "num1": 5,
  "num2": 3
}
```

**Response:**
```json
{
  "product": 15
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:3000/multiply \
     -H "Content-Type: application/json" \
     -d '{"num1": 5, "num2": 3}'
```

### Error Handling

All endpoints return a 400 Bad Request status code with an error message if the input is invalid:

```json
{
  "error": "Both num1 and num2 should be numbers"
}
```

## Testing

### Running Unit Tests

Run the test suite using:
```bash
npm test
```

This will execute all test cases and provide results in the terminal, along with the code coverage report.

To run tests and view coverage:
```bash
npm run coverage
```

## Project Structure

```
my-test-node-js-project/
├── index.js          # Main application file with API endpoints
├── swagger.yaml      # OpenAPI/Swagger specification
├── package.json      # Project metadata and dependencies
└── test/
    └── index.test.js # Unit tests for all endpoints
```

## Dependencies

- [Express.js](https://expressjs.com/) (^5.1.0): Fast, unopinionated web framework
- [Mocha](https://mochajs.org/) (^11.1.0): Feature-rich test framework
- [Chai](https://www.chaijs.com/) (^5.2.0): BDD/TDD assertion library
- [Supertest](https://github.com/visionmedia/supertest) (^7.1.0): HTTP assertions for testing
- [NYC](https://github.com/istanbuljs/nyc) (^17.1.0): Code coverage tool
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express): Serve Swagger UI
- [YAMLJS](https://github.com/jeremyfa/yaml.js): YAML parser for JavaScript

## Development

- ESLint and Prettier are configured for code quality and formatting
- Git-ignored files include node_modules, coverage reports, and environment variables
- Comprehensive test suite with high code coverage
- OpenAPI/Swagger documentation for API specification

## License

This project is licensed under the MIT License.
