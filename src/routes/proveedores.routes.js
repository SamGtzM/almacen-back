const express = require('express')

const router = express.Router()
const proveedorController = require('../controllers/proveedores.controller')

router.post('/', proveedorController.createProveedores)
router.get('/', proveedorController.getProveedores)
router.get('/:proveedorId', proveedorController.getProveedoresById)
router.put('/:proveedorId', proveedorController.updateProveedoresById)
router.put('/:proveedorId', proveedorController.deleteProveedoresById)

module.exports = router