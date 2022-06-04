const mongoose = require('mongoose');

const word = new mongoose.Schema({
    "name": { type: String, required: true },
    "defination": { type: String },
    "type": { type: String, required: true },
    "examples": [{ type: String, required: true }],
});

module.exports = mongoose.model('word', word);