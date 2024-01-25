// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');
const { error } = require('console');


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
  choices: ["GNU AGPLv3", "Apache License 2.0", "GNU GPLv3", "MIT License", "GNU LGPLv3", "None"]
},
{
  type:'input',
  name:'githubUsername',
  message: 'Please enter your github username:', 
},
{
  type:'input',
  name:'email',
  message: 'Please enter your email address:', 
},


  ])
  .then((answers) => {
fs.writeFile("dist/README.md",generateMarkdown(answers),error=>{
  if (error){console.log(error.message)}
  else console.log("Your file was successfully created")
})
  })
