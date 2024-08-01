const express = require('express')
const router = express.Router()
const accesosController = require('../controllers/accesos.controller')

router.post('/', accesosController.createAccesos)
router.get('/', accesosController.getAccesos)
router.get('/:accesoId', accesosController.getAccesosById)
router.put('/:accesoId', accesosController.updateAccesosById)
router.delete('/:accesoId', accesosController.deleteAccesosById)

module.exports = router
