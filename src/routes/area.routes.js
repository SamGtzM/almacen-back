const express = require('express')

const router = express.Router()
const areaController = require('../controllers/area.controller')

router.post('/', areaController.createAreas)
router.get('/', areaController.getAreas)
router.get('/:areaId', areaController.getAreasById)
router.put('/:areaId', areaController.updateAreasById)
router.delete('/:areaId', areaController.deleteAreasById)

module.exports = router
