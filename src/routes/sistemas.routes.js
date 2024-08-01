const express = require('express')

const router = express.Router()
const sistemaController = require('../controllers/sistemas.controller')

router.post('/', sistemaController.createSistemas)
router.get('/', sistemaController.getSistemas)
router.get('/:sistemaId', sistemaController.getSistemasById)
router.put('/:sistemaId', sistemaController.updateSistemasById)
router.delete('/:sistemaId', sistemaController.deleteSistemasById)

module.exports = router
