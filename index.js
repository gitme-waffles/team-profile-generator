// packages
const inquirer = require("inquirer");
const fs = require("fs");

// import questions and classes
const questions = require("./utils/questions");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let teamArray = [];

function generateFile(fileName) {
  // passing teamArray
  //     fs.writeFile(fileName);
  //   });
}

function createTeam() {
  // inquirer.prompt => selections E I Done
  inquirer
    .prompt(questions.employeeOptions)
    .then((answers) => {
      console.log(answers.selections);
      switch (answers.selections) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Done":
          confirm();
          break;

        default:
          break;
      }
    });
  // .then -> answers
  // switch
  // -> E call engineer function
  // -> I call intern function
  // Done -> creatTeam
}

function createManager() {
  inquirer.prompt(questions.manager).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    // push to teamArray
    teamArray.concat(manager);
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
    teamArray.concat(engineer);
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
    teamArray.concat(engineer);
    createTeam();
  });
}

function confirm() {
  inquirer
    .prompt(questions.confirm)
    .then((answer) => {
      answer.confirm === false ? createTeam() : generateFile();
      // if (answer === false) {
        
      // }
    });
}
function menu() {
  createManager();
  // createTeam();
  // inquirer.prompt();
}

// generateFile("./dist/index.html");
(function init() {
  menu();
})();

// filter interns and eniginner from array [filter syntax]
// take out engineer into seperate engineer array -> pass
// take out intern into seperate intern array -> pass
// concat each card to same html file
