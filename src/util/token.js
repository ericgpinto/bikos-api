const jwt = require('jsonwebtoken')
const auth = require('../config/auth.json')

module.exports = {
    generateToken(params = {}) {
        return jwt.sign(params, auth.secret, {
            expiresIn: 86400
        })
    }
}