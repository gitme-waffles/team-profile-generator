const Employee = require("./Employee");

class Manager extends Employee {
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
// -> returns 'Manager'

// officeNumber


module.exports = Manager;
