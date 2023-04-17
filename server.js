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
  },
  console.log(`Connected to the database.`)
);
