var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([{
      type: "input",
      message: "What is your github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your project's title",
      name: "title",
    },
    {
      type: "input",
      message: "What is your email address",
      name: "emailAddress",
    },
    {
      type: "input",
      message: "Please write a short description of your project?",
      name: "description",
    },
    {
      type: "input",
      message: "Please write installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use this app?",
      name: "usage",
    },

    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 2.0", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "What are the guidelines for contributing?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Provide some tests that you have ran on your project?",
      name: "tests",
    },
  ])
  .then((answers) => {
    var badge = "";

    if (answers.license === "MIT") {
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers.license === "APACHE 2.0") {
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (answers.license === "GPL 2.0") {
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (answers.license === "BSD 3") {
      badge =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }

    const answersString = `## ${answers.title},

 ${badge} 

  ## Description
    
  The description of my project is
  ${answers.description}

     
  
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Email](#email)      
  * [Contributing](#contributing)
  * [GithubUsername](#githubusername)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  
  
 ## Installation  
  
  ${answers.installation} 
  
  
  ## Usage
  
  To use this app
  ${answers.usage} 
  
  ## License 
  ${answers.license}
  
  ## Email
  The email address is 
  ${answers.emailAddress}   
  
  ## Contributing      
  Here is how you contribute
  ${answers.contributing}
  
  ## GithubUsername  
  The github username is
  ${answers.username}   
  
  ## Tests
  The following are tests that I have run.
  ${answers.tests}
  
  
   ## Questions
   "If you have any questions about this repository than please contact me at ${answers.email}."  You may view my Github account at the following url: https://github.com/${answers.username}
     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
    `;

    fs.writeFile("Readme.md", answersString, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });