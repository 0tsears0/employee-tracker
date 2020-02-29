// start question prompt (list)
const startQuestions = [
  {
    name: "startChoice",
    message: "What would you like to do?",
    type: "list",
    choices: ["View all departments", "View all employee roles", "View all employees", "Add department", "Add employee role", "Add employee", "Update employee role"]
  }
];
// employee first name (input)
const firstNameQuestions = [
  {
    name: "employee_first_name",
    message: "What is the employee's first name?",
    type: "input",

  }
];
// employee last name (input)
const lastNameQuestions = [
  {
    name: "employee_last_name",
    message: "What is the employee's last name?",
    type: "input",

  }
];
// employee role (list)
const employeeRoleQuestions = [
  {
    name: "employee_role",
    message: "What is the employee's role?",
    type: "input",

  }
];
// employee manager (list)
const employeeManagerQuestions = [
  {
    name: "employee_manager",
    message: "Who is the employee's manager?",
    type: "input",

  }
];