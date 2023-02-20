// Importing dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Creating connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'pass',
        database: 'employee_db'
    },
    console.log(`Connected to the employees database.`)


);

// Function to prompt user with main menu
const mainMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Update Employee Managers', 'View Employees by Manager', 'View Employees by Department', 'View the Total Utilized Budget of a Department', 'Exit']
        }
    ])
        .then((answer) => {
            switch (answer.menu) {
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update an Employee Role':
                    updateEmployeeRole();
                    break;
                case 'Update Employee Managers':
                    updateEmployeeManager();
                    break;
                case 'View Employees by Manager':
                    viewEmployeesByManager();
                    break;
                case 'View Employees by Department':
                    viewEmployeesByDepartment();
                    break;
                case 'View the Total Utilized Budget of a Department':
                    viewTotalBudget();
                    break;
                case 'Exit':
                    db.end();
                    break;
            }
        })
}

mainMenu();

