require('dotenv').config()  
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  port: process.env.DB_PORT
});
 
connection.connect();

module.exports = connection