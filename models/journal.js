const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema ({
    title:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    sleep: {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    weather: {
        type: String,
        required: true
    },
}, {timestamps: true});

const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;