const asyncHandler = require('express-async-handler')
const Mascota = require('../models/mascotasModels')

const getMascotas = asyncHandler(async (req, res) => {
    const mascotas = await Mascota.find()
    res.status(200).json(mascotas)
})

const createMascota = asyncHandler(async (req, res) => {
    // validar manualmente:
    const { nombre, edad, especie, raza, fechaNacimiento, sexo, estadoEsterilizacion, peso, propietario, telefono } = req.body
    if (!nombre || !edad || !especie || !raza || !fechaNacimiento || !sexo || estadoEsterilizacion === undefined || !peso || !propietario ||!telefono) {
        res.status(400)
        throw new Error('Todos los campos obligatorios deben ser llenados')
    }
    const mascota = await Mascota.create(req.body)
    res.status(201).json(mascota)
})

const updateMascota = asyncHandler(async (req, res) => {
    const mascota = await Mascota.findById(req.params.id)
    if (!mascota) {
        res.status(404)
        throw new Error('La mascota no esta registrada')
    }
    const mascotaUpdated = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(mascotaUpdated)
})

const deleteMascota = asyncHandler(async (req, res) => {
    const mascota = await Mascota.findById(req.params.id)
    if (!mascota) {
        res.status(404)
        throw new Error('La mascota no esta registrada')
    }
    await Mascota.deleteOne({ _id: req.params.id })
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getMascotas,
    createMascota,
    updateMascota,
    deleteMascota
}