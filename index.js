const inquirer = require("inquirer");
const fs = require("fs");

const questions = require("./lib/questions");
const engineerData = require("./lib/Engineer");

function generateFile(fileName) {
  inquirer.prompt(questions).then((answers) => {
      fs.writeFile(fileName)
  })
}
// (Function init() {
generateFile("./dist/index.html");
// })();
