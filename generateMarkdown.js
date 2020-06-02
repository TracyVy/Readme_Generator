const fs = require("fs");
const axios = require("axios");

const api = `https://api.github.com/users/${answers.username}/repos?per_page=100`;

axios.get(api).then((res) => {
    const repoNames = res.data.map((repo) => repo.name);
    const repoNamesStr = repoNames.join("\n");
    console.log(`Saved ${repoNames.length} repos`);
    console.log(`Here are the names of the repo: ${repoNamesStr}`);

    function generateMarkdown(res) {
        return `
        # ${res.title}

    `;
    }

fs.writeFile("readme.md", res, (err) => {
    if (err) throw err;
},

});

