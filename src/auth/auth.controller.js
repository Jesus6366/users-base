const { findUserByEmail } = require('../users/users.controllers');

const { comparePassword } = require('../utils/crypto')

const checkUserCredential = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifiedPassword = comparePassword(password, user.password)
        if (verifiedPassword) {
            return user
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}


module.exports = checkUserCredential