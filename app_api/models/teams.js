const { Double } = require('mongodb');
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        min: 0,
        max: 99
    },

    position: {
        type: String,
        enum: ['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F', 'G/F', 'F/C', 'C/F'], // https://masteringjs.io/tutorials/mongoose/enum
        required: true
    },

    height: String,
    age: {
        type: Number,
        min: 18,
        max: 42
    } 
});

const teamSchema = new mongoose.Schema({ 
    _id: Number,

    name: { 
        type: String,
        required: true,
        unique: true
    },

    conference: {
        type: String,
        enum: ["East", "West", "Eastern", "Western"]
    },

    coach: String,
    

    players: [playerSchema]

});

module.exports = mongoose.model('Team', teamSchema);