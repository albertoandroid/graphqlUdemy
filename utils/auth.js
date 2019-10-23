const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const auth = {
    login: async(email, password, secretKey)=>{
        const user = await User.findOne({email: email})
        if(!user) return{error: 'Usuario o contraseña incorrectos'}
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword) return {error: 'Usuario o contraseña incorrectos'}

        const token = await jwt.sign({
            _id: user._id,
            name: user.name,
            date: user.date
        }, secretKey)


        return {message: 'login correcto', token: token}
    },
    checkHeaders: (req, res, next)=>{
        const token = req.header('Authorization')
        const jwtToken = token.split(' ')[1]
    }
}

module.exports = auth

