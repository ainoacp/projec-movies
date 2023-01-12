const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const cinemaSchema = new Schema(
    {
        name: {type: 'string', required: true},
        location: {type: 'string', required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
    },{
        timestamps: true
    }
);


const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;