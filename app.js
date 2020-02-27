const inquirer = require("inquirer");
require("console.table");
const connection = require("./config/connection");








connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
// add start function ;
});