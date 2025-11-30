const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModels')

const registrar = asyncHandler( async (req, res) => {
    //Desestructurar el body
    const {usuario, password} = req.body
    //Verificar todos los datos
    if (!usuario) {
        res.status(400);
        throw new Error('Por favor, rellena el campo usuario');
    }
    if (!password) {
        res.status(400);
        throw new Error('Por favor, rellena el campo password');
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Crear al usuario
    const user = await User.create({
        usuario,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            usuario: user.usuario
        })

    }else{
        res.status(400)
        throw new Error('No se pudo crear el usuario')
    }
})

const login = asyncHandler( async(req, res) => {

    const {usuario,password} = req.body

    //Varificar que el usuario exista
    const user = await User.findOne({usuario})
 
    //Si el usuario existe, vamos a verificar su password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            usuario: user.usuario,
            token: generarToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Credenciales incorrectas')
    }

})

const misDatos = asyncHandler( async(req, res) =>{

})

//Funcion para generar le token
const generarToken = (id_usuario) => {
    return jwt.sign({id_usuario}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registrar,
    login,
    misDatos
}