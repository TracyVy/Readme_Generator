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
  console.log(answers);
  // const api = `https://api.github.com/users/${answers.username}/repos?per_page=100`;
  const avatarURL = `https://avatars.githubusercontent.com/${answers.username}`;
  const answersStr = JSON.stringify(answers, null, "\t");
  console.log(avatarURL);
  // axios.get(api).then((res) => {

  //   // console.log(res);
  //   // const repoNames = res.data.map((repo) => repo.name);
  //   // const repoNamesStr = repoNames.join("\n");
  //   // console.log(repoNames);
  //   // console.log(repoNamesStr);

  let avatarTemplate = `
  # Table of content

  ## Project Name
  ${answers.projectName};

  ## Project URL
  ${answers.projectURL};

  ## Short Description
  ${answers.shortDescr};

  ## License Choice
  ${answers.licenseChoice};

  ## Install Command
  ${answers.installCommand};

  ![Avatar](${avatarURL})`;
  console.log(avatarTemplate);
  fs.writeFile("readme.md", avatarTemplate, (err) => {
    if (err) throw err;
    // console.log(answersStr);
  });
});
