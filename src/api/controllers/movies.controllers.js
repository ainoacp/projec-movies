const Movie = require('../models/movies.model');

const  getAllMovies = async (req, res) => {
    try {
        const myMovies = await Movie.find();
        return res.status(200).json(myMovies)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getMovieById = async (req, res) => {
    try {
        const {id} = req.params;
        const myMovie = await Movie.findById(id);
        if (myMovie) {
			return res.status(200).json(myMovie);
		} else {
			return res.status(404).json('Any movie with that id');
		}
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieByTitle = async (req, res) => {
    try {
        const {title} = req.params;
        const myMovieByTitle = await Movie.find({ "title" : { $regex :  RegExp(`^${title}$`, 'i') } } );
        if (myMovieByTitle) {
            return res.status(200).json(myMovieByTitle);
        } else {
            return res.status(404).json('Any movie with that title');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieByGender = async (req, res) => {
    try {
        const {gender} = req.params;
        const myMovieByGender = await Movie.find({ gender:gender });
        if (myMovieByGender) {
            return res.status(200).json(myMovieByGender);
        } else {
            return res.status(404).json('Any movie with that gender');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieByYear = async (req, res) => {
    try {
        const {year} = req.params;
        const myMovieByYear = await Movie.find({ year:{ $gt:year } });
        if (myMovieByYear) {
            return res.status(200).json(myMovieByYear);
        } else {
            return res.status(404).json('Any movie with that year');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const putMovie = async (req, res) => {
    try {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovie = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json('Movie successfully deleted');
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    getAllMovies, 
    getMovieById, 
    getMovieByTitle, 
    getMovieByGender, 
    getMovieByYear,
    postMovie, 
    putMovie,
    deleteMovie
};