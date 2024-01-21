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
    message: 'Please describe your project ?',
},
{
  type:'input',
  name:'Description',
  message: 'Please describe your project ?', 
},

  ])

  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();