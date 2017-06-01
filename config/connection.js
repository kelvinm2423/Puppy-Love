// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("puppylove", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;

// // Require mysql
// var mysql = require("mysql");

// // Set up our connection information
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "puppylove"
// });

// // Connect to the database
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection
// module.exports = connection;