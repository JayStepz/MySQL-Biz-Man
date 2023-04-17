const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    host: '',
    user: '',
    password: '',
    database: ''
  }
);

// Launches main function/app upon database connection
db.connect(err => {
  if (err) {
    console.log('There was an error to connect.')
  } else {
    console.log('Connected to the Bizniz Server, boss.')
  };

  bizApp();
});

// Main function/app
function bizApp() {
  inquirer.prompt({
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add a Department',
      'Add a Role',
      'Add an Employee',
      'Update Employee Role'
    ]
  }).then(function(answer) {
    if (answer.choice === 'View All Departments') {
      // View All Departments
      db.query('SELECT * FROM department')
    }
    if (answer.choice === 'View All Roles') {
      // View All Roles
      db.query('SELECT * FROM biz_role')
    }
    if (answer.choice === 'View All Employees') {
      // View All Employees
      db.query('SELECT * FROM employee')
    }
    if (answer.choice === 'Add a Department') {
      // Add a Department
    }
    if (answer.choice === 'Add a Role') {
      // Add a Role
    }
    if (answer.choice === 'Add an Employee') {
      // Add an Employee
    }
    if (answer.choice === 'Update Employee Role') {
      // Update Employee Role
    }
  });
}
