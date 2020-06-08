const fs = require("fs");
const inquirer = require("inquirer");

let questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "shortDescr",
  },
  {
    type: "list",
    message: "What kind of license should you have?",
    choices: ["MIT", "IBM", "MOZILLA", "ODbl"],
    name: "licenseChoice",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installCommand",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "testCommand",
  },
];

let badgeURL = (licenseChoice) => {
  if (licenseChoice === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (licenseChoice === "IBM") {
    return "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
  } else if (licenseChoice === "MOZILLA") {
    return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
  } else if (licenseChoice === "ODbL") {
    return "https://img.shields.io/badge/License-ODbL-brightgreen.svg";
  }
};

inquirer.prompt(questions).then((answers) => {
  let readmeTemplate = `
  # Project Name
  ${answers.projectName}

  ## Short Description
  ${answers.shortDescr};

  ## Table of content

  - Installation
  - Usage
  - License
  - Contributions
  - Test Command
  - Questions
  
  ### Installation
  ${answers.installCommand};

  ### Usage

  ### License
  [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)  
`[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`


  ### Contributions

  ### Tests
  ${answers.testCommand};

  ### Questions
  ${`Feel free to email (mailto: tracyvy88@gmail.com)`};

  `;

  fs.writeFile("readme.md", readmeTemplate, (err) => {
    if (err) throw err;
  });
});
