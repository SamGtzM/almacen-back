"use strict";

var express = require('express');
var router = express.Router();
var accesosController = require('../controllers/accesos.controller');
router.post('/', accesosController.createAccesos);
router.get('/', accesosController.getAccesos);
router.get('/:accesoId', accesosController.getAccesosById);
router.put('/:accesoId', accesosController.updateAccesosById);
router["delete"]('/:accesoId', accesosController.deleteAccesosById);
module.exports = router;