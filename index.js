const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const port = 3000;

// Load Swagger specification
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'));

// Middleware to parse JSON requests
app.use(express.json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route to add two numbers
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res
      .status(400)
      .json({ error: 'Both num1 and num2 should be numbers' });
  }

  const sum = num1 + num2;
  res.json({ sum });
});

// Ensure the '/subtract' route is registered before the server starts
app.post('/subtract', (req, res) => {
    console.log(req.body); // Debugging line
    // Debugging log to verify request payload
    console.log('Request received at /subtract:', req.body);
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
    }

    const difference = num1 - num2;
    res.json({ difference });
});

// Multiplication endpoint
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Both num1 and num2 should be numbers' });
    }

    const product = num1 * num2;
    res.json({ product });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`API documentation available at http://localhost:${port}/api-docs`);
  });
}

module.exports = app;
