const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { ADMIN_ROLE, CUSTOMER_ROLE } = require('../commons/util');

const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },

    password: {
        type: String,
        required: true,
    }
    /*role: {
        type: String,
        enum: [ADMIN_ROLE, CUSTOMER_ROLE],
        default: CUSTOMER_ROLE
    },

    loginAttempts: {
        type: Number,
        required: true,
        default: 0
    },

    isLocked: {
        type: Boolean,
        default: false
    }*/

}, { collection: 'users' });

schema.pre('save', function (next) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync();
        this.password = bcrypt.hashSync(this.password, salt);
    }

    next();
})

module.exports = mongoose.model('User', schema);