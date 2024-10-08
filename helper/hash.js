const bcrypt = require('bcryptjs')

const hashPass = (pass) => {
    const salt = bcrypt.genSaltSync(6)
    return bcrypt.hashSync(pass, salt)
}
console.log( );

const comparePass = (pass, hashed) => {
    return bcrypt.compareSync(pass, hashed)
}
module.exports = {hashPass, comparePass}