
// const { manager } = require("../utils/questions");


function renderManager(managerArray) {
  let managerCard = "";
  
  managerArray.forEach(manager => {
    const managerCardTemplate = `        	<div class="card">
		<div class="card-header">
			<h2>${manager.name}</h2>
			<i class="fas fa-user-tie"> Manager</i>
      </div>
      <table>
			<tr>
      <td>ID: ${manager.id}</td>
			</tr>
			<tr>
      <td>email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${manager.email}" target="_blank">${manager.email}</a></td>
			</tr>
			<tr>
					<td>Office numer: ${manager.officeNumber}</td>
          </tr>
		</table>
    </div>`
    managerCard += managerCardTemplate;
  });
  return managerCard
}

function renderEngineer(engineerArray) {
  let engineerCard = '';

  engineerArray.forEach(engineer => {
    let engineerCardTemplate = `        <div class="card">
    <div class="card-header">
      <h2>${engineer.name}</h2>
      <i class="fas fa-wrench"> Engineer</i>
    </div>
            <table>
            <tr>
                <td>ID: ${engineer.id}</td>
            </tr>
            <tr>
                <td>email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${engineer.email}" target="_blank">${engineer.email}</a></td>
            </tr>
            </tr>
            <tr>
                <td>Github: ${engineer.github}</td>
            </tr>
        </table>
  </div>`
    engineerCard += engineerCardTemplate;
  })
  return engineerCard;
}

function renderIntern(internArray) {
  let internCard = "";

  internArray.forEach(intern => {
    const internCardTemplate = `<div class="card">
    <div class="card-header">
      <h2>${intern.name}</h2>
      <i class="fas fa-graduation-cap"> Intern</i>
    </div>
            <table>
            <tr>
                <td>ID: ${intern.id}</td>
            </tr>
            <tr>
                <td>email: <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${intern.email}" target="_blank">${intern.email}</a></td>
            </tr>
            <tr>
                <td>School: ${intern.school}</td>
            </tr>
        </table>
  </div>`
  internCard += internCardTemplate
  })
  return internCard;
}

function cardCompiler(employeeData) {
  let cardCollection = '';

  // add to cardCollection then send to renderManager
  cardCollection += renderManager(employeeData.filter(arrayEl => "Manager" === arrayEl.getRole()));
  cardCollection += renderEngineer(employeeData.filter(arrayEl => "Engineer" === arrayEl.getRole()));
  cardCollection += renderIntern(employeeData.filter(arrayEl => "Intern" === arrayEl.getRole()));

  return cardCollection
}

function generateHTML(employeeData) {
  const collectionOfCards = cardCompiler(employeeData);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
        integrity="sha512-gMjQeDaELJ0ryCI+FtItusU9MkAifCZcGq789FrzkiM49D8lbDhoaUaIX4ASU187wofMNlgBJ4ckbrXM9sE6Pg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Document</title>
    </head>
    <body>
      <header>
        <h1>Meet the Team</h1>
      </header>
      <section>
        <div class="flex-wrapper">
${collectionOfCards}
          </div>
      </section>
    </body>
  </html>
      `;
}

module.exports = {
  generateHTML,
};
