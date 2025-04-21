const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

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
  });
}

module.exports = app;
