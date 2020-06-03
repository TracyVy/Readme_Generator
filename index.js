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
    message: "What does the user need to know about contributing to the repo?",
    name: "contributeNTK",
  },
];

inquirer.prompt(questions).then((answers) => {
  // console.log(answers);
  const api = `https://api.github.com/users/${answers.username}/events/public`;
  const avatarURL = `https://avatars.githubusercontent.com/${answers.username}`;
  console.log(avatarURL);
  axios.get(api).then((res) => {
    const repoURL = res.data[1].repo.url;
    const projectName = res.data[1].repo.name;
    const userEmail = res.data[1].payload;
    console.log(repoURL);
    console.log(projectName);
    console.log(userEmail);

    let readmeTemplate = `
    # Table of content

    ## Project Name
    

    ## Project URL
    

    ## Short Description
    ${answers.shortDescr};

    ## License Choice
    ${answers.licenseChoice};

    ## Install Command
    ${answers.installCommand};

    ## Email
    
    ![Avatar](${avatarURL})`;
    // console.log(readmeTemplate);
    fs.writeFile("readme.md", readmeTemplate, (err) => {
      if (err) throw err;
    });
  });
});
