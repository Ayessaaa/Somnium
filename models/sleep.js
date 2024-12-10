const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sleepSchema = new Schema ({
    hour:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    day:{
        type: Number,
        required: true
    }
}, {timestamps: true});

const Sleep = mongoose.model('Sleep', sleepSchema);
module.exports = Sleep;