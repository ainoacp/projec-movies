const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const movieSchema = new Schema(
    {
        title: {type: 'string', required: true},
        director: {type: 'string', required: true},
        year: {type: 'number', required: true},
        gender: {type: 'string', required: true},
    },{
        timestamps: true
    }
);


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;