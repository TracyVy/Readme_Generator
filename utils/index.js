var fs = require("fs");
var axios = require("axios");
var inquirer = require("inquirer");

var questions = [
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

inquirer.prompt(questions).then((foobar) => {
  // console.log(answers);
  // const answersStr = answers.join("\n");

  // const api = `https://api.github.com/users/${answers.username}/repos?per_page=100`;
  // axios.get(api).then((res) => {
  //   const repoNames = res.data.map((repo) => repo.name);
  //   const repoNamesStr = repoNames.join("\n");
  const answersStr = JSON.stringify(foobar, null, "\t");

  fs.writeFile("answers.txt", answersStr, (err) => {
    if (err) throw err;
    // console.log(`Saved ${repoNames.length} repos`);
    // console.log(repoNames);
    // console.log(answersStr);
    console.log(foobar);
    console.log(answersStr);
  });
  // });
});

// module.exports = index;
