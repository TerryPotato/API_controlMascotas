const mongoose = require('mongoose')

const mascotaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Porfavor proporciona el nombre de la mascota']
    },
    edad: {
        type: Number, // Usa Number para enteros en Mongoose
        required: [true, 'Porfavor proporciona la edad de la mascota']
    },
    especie: {
        type: String,
        required: [true, 'Porfavor proporciona la especie de la mascota']
    },
    raza: {
        type: String,
        required: [true, 'Porfavor proporciona la raza de la mascota']
    },
    fechaNacimiento: {
        type: Date,
        required: [true, 'Porfavor proporciona la fecha de nacimiento de la mascota']
    },
    sexo: {
        type: String,
        required: [true, 'Porfavor proporciona el sexo de la mascota']
    },
    estadoEsterilizacion: {
        type: Boolean,
        required: [true, 'Porfavor proporciona el estado de esterilización de la mascota']
    },
    peso: {
        type: Number, // Usa Number para decimales también
        required: [true, 'Porfavor proporciona el peso de la mascota']
    },
    propietario: {
        type: String,
        required: [true, 'Porfavor proporciona el nombre del propietario de la mascota']
    },
    telefono: {
        type: Number, // Usa Number para enteros en Mongoose
        required: [true, 'Porfavor proporciona el numero del propietario de la mascota']
    },
    notas: {
        type: String,
    },
    chipIdentificador: {
        type: String,
    }
    /*fotografia: {
        type: String,
        required: [true, 'Porfavor proporciona la raza de la mascota']
    }*/
}, {
    timestamps: true
})

module.exports = mongoose.model('Mascota', mascotaSchema)