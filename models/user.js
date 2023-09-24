// user.js

// Define a basic User class
class User {
    constructor(firstName, lastName, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
  }
  
  // Export a function to create a new user
  function createUser(firstName, lastName, email) {
    const newUser = new User(firstName, lastName, email);
    return newUser;
  }
  
  module.exports = {
    createUser,
  };
  