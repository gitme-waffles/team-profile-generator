// packages
const inquirer = require("inquirer");
const fs = require("fs");

// import questions and classes
const generateHTML = require("./src/generateHTML");
const questions = require("./utils/questions");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let teamArray = [];


function generateFile() {
  const htmlContent = generateHTML.generateHTML(teamArray);
  const fileName = './dist/index.html'
  fs.writeFile(fileName, htmlContent, (err) => {
    err ? console.log(err) : console.log("File created! \n-Check dist/ folder-");
  });
}

function createTeam() {
  inquirer.prompt(questions.employeeOptions).then((answers) => {
    // answers.selections === "Done" ? console.log(answers.selections + "!") : console.log("Add an " + answers.selections);
    switch (answers.selections) {
      case "Engineer":
        console.log("Add an " + answers.selections);
        createEngineer();
        break;
      case "Intern":
        console.log("Add an " + answers.selections);
        createIntern();
        break;
      case "Done":
        teamArray.length <= 5 ? confirm() : generateFile();
        break;

      default:
        break;
    }
  });
}

function createManager() {
  inquirer.prompt(questions.manager).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    teamArray.push(manager);
    createTeam();
  });
}

function createEngineer() {
  inquirer.prompt(questions.engineer).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    teamArray.push(engineer);
    createTeam();
  });
}

function createIntern() {
  inquirer.prompt(questions.intern).then((answers) => {
    const engineer = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    teamArray.push(engineer);
    createTeam();
  });
}

function confirm() {
  inquirer.prompt(questions.confirm).then((answer) => {
    answer.confirm === false ? createTeam() : generateFile();
  });
}

function menu() {
  console.log('Assign the team Manager');
  createManager();
}

(function init() {
  menu();
})();