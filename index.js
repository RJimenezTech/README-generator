// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
            }
        }        
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('Please enter the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of the project!');
            }
        }        
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Provide installation instructions for the project:',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide installation instructions for the project!');
            }
        }        
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide usage information:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information!');
            }
        }        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type:',
        choices: ['MIT','Apache','Public Domain','GPL','JRL']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines:',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines!');
            }
        }    
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Provide testing instructions:',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please provide testing instructions!');
            }
        }    
    }
];

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            return answers;
        })
        .then(data => {
            console.log(data);
            return generateMarkdown(data);
        })  
        .then(pageMarkdown => {
            console.log(pageMarkdown);
            return writeToFile(pageMarkdown);
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();