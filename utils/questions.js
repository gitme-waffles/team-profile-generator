const manager = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Assign an ID number",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is their office number?",
  },
];

const engineer = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Assign an ID number",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is their Github username?",
  },
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Assign an ID number",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "school",
    message: "What Educational Institute did they attend?",
  },
];

const employeeOptions = [
  {
    type: "list",
    name: "selections",
    message: "Add members to the team!",
    choices: ["Engineer", "Intern", "Done"],
  },
];

const confirm = [
  {
    type: "confirm",
    name: "confirm",
    message: "Are you sure you are done?",
  },
];

module.exports = {
  manager,
  engineer,
  intern,
  employeeOptions,
  confirm,
};
