const inquirer = require("inquirer");
require("console.table");
const connection = require("./config/connection");

// import functions to work with database
const { getAllItems,

} = require('./lib/db-items');
// import arrays of prompts for inquirer
const { startQuestions, firstNameQuestions, lastNameQuestions, employeeRoleQuestions, employeeManagerQuestions } = require('./lib/prompts');

// function to start questions
const startQuestions = async () => {
  const { questionAction } = await inquirer.prompt(startQuestions);

}

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
// add start function ;
});