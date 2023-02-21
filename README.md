# CLI Employee Tracker

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=9675FF&multiline=true&width=435&height=70&lines=Vandelay+Industries;+Employee+Tracker)](https://git.io/typing-svg)

## Description 📜

This is a command-line application that allows the user to easily manage a company's employee database, using Node.js, Inquirer, and MySQL. The application allows the user to: view and add departments, roles, and employees; update employee roles; and view employees by manager. The application also allows the user to view the total utilized budget of a department -- i.e., the combined salaries of all employees in that department. 

---

## Installation 💿

1. Clone the repository to your local machine.
2. Terminal: Navigate to the root directory of the project.
3. Terminal: Run `npm install` to install the required dependencies.
4. Terminal: `mysql -u root -p` to log into MySQL.
5. Terminal: `source db/schema.sql` to create the database.
6. Terminal: `source db/payload.sql` to seed the database.
7. Terminal: `quit` to exit MySQL.
8. Terminal: `node index.js` to start the application.

## Technologies Used 🛠️

* JavaScript
* Node.js
* MySQL
* Inquirer
* Console.Table

![Screenshot](./assets/img/Screenshot%202023-02-20%20191356.png)

---
## License 📝

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2023 Mario Repas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

