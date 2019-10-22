const bcrypt = require('bcrypt')
const User = require('../models/user')

const auth = {
    login: async(email, password, secretKey)=>{
        const user = await User.findOne({email: email})
        if(!user) return{error: 'Usuario o contraseña incorrectos'}
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword) return {error: 'Usuario o contraseña incorrectos'}
        return {message: 'login correcto'}
    }
}

module.exports = auth

