const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: '',
    password: '',
    database: 'biz_db'
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
      db.query('SELECT * FROM department', function(err, results) {
        console.table(results);
      });
    }
    else if (answer.choice === 'View All Roles') {
      // View All Roles
      db.query('SELECT * FROM biz_role', function(err, results) {
        console.table(results);
      });
    }
    else if (answer.choice === 'View All Employees') {
      // View All Employees
      db.query('SELECT * FROM employee', function(err, results) {
        console.table(results);
      });
    }
    else if (answer.choice === 'Add a Department') {
      // Add a Department
      inquirer.prompt([
        {
          type: 'input',
          name: 'newDept',
          message: 'Enter new department name.'
        }
      ]).then(function(answer) {
        db.query('INSERT INTO department VALUES ?', {dept_name: answer.newDept})
      });
    }
    else if (answer.choice === 'Add a Role') {
      // Add a Role
      inquirer.prompt([
        {
          type: 'input',
          name: 'newRole',
          message: 'Enter new employee role.'
        }
      ]).then(function(answer) {
        db.query('INSERT INTO biz_role VALUES ?', {title: answer.newRole})
      });
    }
    else if (answer.choice === 'Add an Employee') {
      // Add an Employee
      inquirer.prompt([
        {
          type: 'input',
          name: 'newFirstName',
          message: 'Enter new employee first name'
        },
        {
          type: 'input',
          name: 'newLastName',
          message: 'Enter new employee last name'
        }
      ]).then(function(answer) {
        db.query('INSERT INTO employee', {first_name: answer.newFirstName}, {last_name: answer.newLastName})
      })
    }
    else (answer.choice === 'Update Employee Role') {
      // Update Employee Role
      inquirer.prompt([
        {
          type: 'list',
          name: 'upRole',
          message: 'Which employee is changing roles?',
          choices: [

          ]
        }
      ])
    }
  });
}
