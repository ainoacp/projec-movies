const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const cinemaSchema = new Schema(
    {
        name: {type: 'string', required: true},
        location: {type: 'string', required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'movie'}],
    },{
        timestamps: true
    }
);


const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema;