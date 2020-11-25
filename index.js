const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'Username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'Email',
    },
    {
      type: 'input',
      message: 'What is the Title of your application?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Please write a description of your application.',
      name: 'Description',
    },
    {
      type: 'list',
      message: 'Which is the license of your application?',
      name: 'License',
      choices: ["MIT","LGPL","Permissive","Copyleft","Public Domain"]
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'What does the user need to know about the repo?',
      name: 'Usage',
    },

  ])

  .then((response) => {
    console.log('response', response)
  
const userInput = `
# Title ${response.Title}

## Description

${response.Description}

## Table of Contents

* [Title](#Title)

* [Description](#Description)

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Contact](#Contact)

## Installation

${response.Installation}

## Usage

${response.Usage}

## License

${response.License}

## Contributing

${response.Contributing}

## Tests

${response.Tests}

## Contact 

* ${response.Username}

* ${response.Email}

  `;

  fs.writeFile('README.md', userInput, (err) =>
   err ? console.error(err) : console.log('You have created your personalized Readme file!')
  );

});


