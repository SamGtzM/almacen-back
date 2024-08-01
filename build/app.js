"use strict";

var express = require('express');
var morgan = require('morgan');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// ROUTES
var authRoute = require('./routes/auth.routes');
/*const accesosRoutes = require('./routes/accesos.routes')
const areasRoutes = require('./routes/area.routes')
const equiposRoutes = require('./routes/equipo.routes')
const proveedoresRoutes = require('./routes/proveedores.routes')
const sistemasRoutes = require('./routes/sistemas.routes')*/

app.use('/auth', authRoute);
/*app.use('/accesos', accesosRoutes)
app.use('/areas', areasRoutes)
app.use('/equipos', equiposRoutes)
app.use('/proveedores', proveedoresRoutes)
app.use('/sistemas', sistemasRoutes)*/

module.exports = app;