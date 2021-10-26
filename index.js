// packages
const inquirer = require("inquirer");
const fs = require("fs");

// import questions and classes
const questions = require("./utils/questions");
const Engineer = require("./lib/Engineer");
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

function generateFile(fileName) {
  inquirer.prompt(questions).then((answers) => {
      fs.writeFile(fileName)
  })
}
// (Function init() {
// generateFile("./dist/index.html");
// })();
