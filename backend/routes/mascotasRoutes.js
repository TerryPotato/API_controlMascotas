const express = require('express')
const router = express.Router()
const { getMascotas, createMascota, updateMascota, deleteMascota } = require('../controllers/mascotasControllers')
//Protejo todas las tareas
const protect = require('../middleware/authMiddleware')

router.get('/', protect, getMascotas)
router.post('/', protect, createMascota)

//*TODO: recordar protegerlos despues de terminar las pruebas
router.put('/:id', protect,  updateMascota)
router.delete('/:id', protect, deleteMascota)

module.exports = router