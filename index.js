// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');

const generatePage = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
  {
    type:'input',
    name:'title',
    message: 'What is the title of your project ?',
},
{
  type:'input',
    name:'Description',
    message: 'Please describe your project:',
},
{
  type:'input',
  name:'installation',
  message: 'Please enter installation instructions:', 
},
{
  type:'input',
  name:'usage',
  message: 'Please enter usage info:', 
},
{
  type:'input',
  name:'contributing',
  message: 'Please enter contribution guidelines:', 
},
{
  type:'input',
  name:'test',
  message: 'Please enter test instructions:', 
},
{
  type:'list',
  name:'license',
  message: 'Please choose a license:', 
  choices: ["GNU AGPLv3", "Apache License 2.0", "GNU GPLv3", "MIT License", "GNU LGPLv3"]
},

  ])

  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();