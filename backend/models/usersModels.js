const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: [true, 'porfavor teclea tu nombre de usuario']
    },
    password: {
        type: String,
        required: [true, 'Por favor teclea tu contraseña']
    },
    esAdministrador: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)