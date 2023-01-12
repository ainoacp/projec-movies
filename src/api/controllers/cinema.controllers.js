const Cinema = require('../models/cinema.model');

const  getCinemas = async (req, res) => {
    try {
        const myCinema = await Cinema.find().populate("movies"); //populamos por el campo ("movies) del cinema.model
        return res.status(200).json(myCinema)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCinema = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const putCinema = async (req, res) => {
    try {
        const {id} = req.params;
        const putCinema = new Cinema(req.body);
        putCinema._id = id;
        const updatedCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true});
        return res.status(200).json(updatedCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCinema = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedCinema = await Cinema.findByIdAndDelete(id);
        return res.status(200).json('Movie successfully deleted');
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    getCinemas, 
    postCinema, 
    putCinema,
    deleteCinema
};