const mongoose = require('mongoose');
const { EASY_MODE, MEDIUM_MODE, HARD_MODE } = require('../commons/util');
const User = require('../users/user.entity');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    gameDifficulty: {
        type: String,
        enum: [EASY_MODE, MEDIUM_MODE, HARD_MODE]
    },

    duration: {
        type: Number
    }
}, {collection: 'scores'})
module.exports = mongoose.model('Score', gameSchema)