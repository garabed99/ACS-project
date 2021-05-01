const User = require('../users/user.entity');
const { Unauthorized } = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ADMIN_ROLE } = require('../commons/util');

class AdminService {

    async unlock(id) {
        //try catch handle 
        try {
            await User.findByIdAndUpdate(id, {isLocked: false, loginAttempts: 0}, {useFindAndModify: false})
        }
        catch (err) {
            throw new Error('User not found')
        }
    }

    async lock(id) {
        try {
            await User.findByIdAndUpdate(id, {isLocked: true}, {useFindAndModify: false})
        }
        catch (err) {
            throw new Error('User not found')
        }
    }
}

module.exports = new AdminService();