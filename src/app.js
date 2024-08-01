const express = require('express')
const morgan = require('morgan')

const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// ROUTES
const authRoute = require('./routes/auth.routes')
/*const accesosRoutes = require('./routes/accesos.routes')
const areasRoutes = require('./routes/area.routes')
const equiposRoutes = require('./routes/equipo.routes')
const proveedoresRoutes = require('./routes/proveedores.routes')
const sistemasRoutes = require('./routes/sistemas.routes')*/

app.use('/auth', authRoute)
/*app.use('/accesos', accesosRoutes)
app.use('/areas', areasRoutes)
app.use('/equipos', equiposRoutes)
app.use('/proveedores', proveedoresRoutes)
app.use('/sistemas', sistemasRoutes)*/

module.exports = app
