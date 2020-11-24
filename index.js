const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
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
      type: 'input',
      message: 'Please write a table of contents for your application.',
      name: 'ToC',
    },
    {
      type: 'input',
      message: 'How do you install your application?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What is your application used for?',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'What is the license of your application?',
      name: 'License',
    },
    {
      type: 'input',
      message: 'Who were the contributors of the application?',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'Please put the tests of the application here.',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'Put any questions for the application here.',
      name: 'Questions',
    },

  ])

  .then((response) => {
    console.log('response', response)
  
const userInput = `
# ${response.Title}

## Description

${response.Description}

## Table of Contents

${response.ToC}

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

## Questions

${response.Questions}
  `;

  fs.writeFile('README.md', userInput, (err) =>
   err ? console.error(err) : console.log('You have created your personalized Readme file!')
  );

});


