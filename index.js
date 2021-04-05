// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown_ = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage:',
      },
      {
        type: 'checkbox',
        name: 'license',
        // widely used licenses
        // more licenses can be added from https://opensource.org/licenses
        choices: [ 
                    'Apache-2.0', 
                    'BSD-2-Clause', 
                    'BSD-3-Clause', 
                    'CDDL-1.0',
                    'EPL-2.0',
                    'GPL-2.0', 
                    'GPL-3.0', 
                    'LGPL-2.0', 
                    'LGPL-2.1', 
                    'LGPL-3.0', 
                    'MIT',
                    'MPL-2.0'
                ]
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests:',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Questions:',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        error ? console.error(error) : console.log('Success!')
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        writeToFile('README_Generated.md',markdown_(data))
    });
}

// Function call to initialize app
init();
