"use strict";

var express = require('express');
var router = express.Router();
var proveedorController = require('../controllers/proveedores.controller');
router.post('/', proveedorController.createProveedores);
router.get('/', proveedorController.getProveedores);
router.get('/:proveedorId', proveedorController.getProveedoresById);
router.put('/:proveedorId', proveedorController.updateProveedoresById);
router.put('/:proveedorId', proveedorController.deleteProveedoresById);
module.exports = router;