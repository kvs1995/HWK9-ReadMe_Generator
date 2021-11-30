// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const genMarkdown = require('./generateMarkdown');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Please provide the installation instructions for the project.'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What will this project be used for?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'For any users wishing to contribute to your project, are there any guidelines you would like them to follow?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide the project test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does this project have a license?',
        choices: ['MIT',
                'GPLv3',
                'Apache 2.0',
                'Mozilla Public License 2.0',
                'No License']
    },
    {
        type: 'input',
        name: 'gitUsername',
        message: 'Enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'emailaddress',
        message: 'Enter your GitHub password: '
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const generateReadMe = generateMarkdown(data);
    fs.writeFile('README,md', generateReadMe, (err) => 
        err ? console.log(err) : console.log('Your README has been generated.'))
}

// TODO: Create a function to initialize app
function init() {
//initiliaze the question prompts above and pass the data provided to write To File
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data)
    })
}

// Function call to initialize app
init();
