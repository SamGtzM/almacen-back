"use strict";

var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ironmaiden12',
  database: 'almacen_it'
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.log('Error en db: ', err);
  } else {
    console.log('DB ok');
  }
});
module.exports = mysqlConnection;