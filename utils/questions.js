const manager = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "Assign an ID number",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
];

const engineer = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "Assign an ID number",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "Assign an ID number",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "school",
    message: "What Educational Institute did you attend?",
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
