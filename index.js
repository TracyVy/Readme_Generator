const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

let questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the URL to your project",
    name: "projectUrl",
  },
  {
    type: "input",
    message: "What is the name of your project",
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
    choices: ["MIT", "APACHE", "MOZILLA", "BOOST SOFTWARE"],
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
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "useNTK",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributeNTK",
  },
];

inquirer.prompt(questions).then((answers) => {
  // console.log(answers);
  const answersStr = JSON.stringify(answers, null, "\t");

  fs.writeFile("answers.txt", answersStr, (err) => {
    if (err) throw err;
    console.log(answers);
    // console.log(answersStr);
  });
});
