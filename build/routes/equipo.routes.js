"use strict";

var express = require('express');
var router = express.Router();
var equipoController = require('../controllers/equipo.controller');
router.post('/', equipoController.createEquipos);
router.get('/', equipoController.getEquipos);
router.get('/:equipoId', equipoController.getEquiposById);
router.put('/:equipoId', equipoController.updateEquiposById);
router.put('/:equipoId', equipoController.deleteEquiposById);
router.get('/:numeroempleado', equipoController.getEquiposRHById);
module.exports = router;