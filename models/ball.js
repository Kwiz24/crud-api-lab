const mongoose = require('mongoose');

const ballSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
        min: 0,
    },
    size: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Ball', ballSchema);