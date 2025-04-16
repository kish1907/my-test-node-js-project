const chai = require('chai');
const request = require('supertest');
const app = require('../index'); // Import the app
const { expect } = chai;
const { exec } = require('child_process');

describe('POST /add', () => {
  it('should return the sum of two numbers', async () => {
    const res = await request(app).post('/add').send({ num1: 5, num2: 10 });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('sum', 15);
  });

  it('should return an error if num1 or num2 is not a number', async () => {
    const res = await request(app)
      .post('/add')
      .send({ num1: 'five', num2: 10 });

    expect(res.status).to.equal(400);
    expect(res.body).to.have.property(
      'error',
      'Both num1 and num2 should be numbers'
    );
  });
});

describe('Server startup', () => {
  it('should start the server without errors', (done) => {
    exec('node index.js', (error, stdout) => {
      if (error) {
        return done(error);
      }
      expect(stdout).to.include('Server is running on http://localhost:3000');
      done();
    });
  });
});
