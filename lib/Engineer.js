const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
// Extends from employee
// name
// id
// email
// getName()
// getId()
// getEmail()

// getRole()
// -> returns 'Emgineer'

// github username
// getGithub()

module.exports = Engineer;
