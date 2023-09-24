const { expect } = require('chai');
const { createUser } = require('../models/user'); // Import the function to be tested

describe('User Registration', () => {
  it('should create a new user', () => {
    const newUser = createUser('John', 'Doe', 'johndoe@example.com');
    expect(newUser).to.be.an('object');
    expect(newUser.firstName).to.equal('John');
    // Add more assertions as needed
  });

  // Add more test cases for different scenarios
});
