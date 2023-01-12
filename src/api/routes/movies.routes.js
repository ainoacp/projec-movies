const express = require('express');
const {
    getAllMovies, 
    getMovieById, 
    getMovieByTitle, 
    getMovieByGender, 
    getMovieByYear,
    postMovie, 
    putMovie,
    deleteMovie
} = require('../controllers/movies.controllers');

const router = express.Router();

router.get('/',  getAllMovies);
router.get('/:id',  getMovieById);
router.get('/title/:title',  getMovieByTitle);
router.get('/gender/:gender',  getMovieByGender);
router.get('/year/:year',  getMovieByYear);

router.post('/', postMovie);

router.put('/:id', putMovie);

router.delete('/:id', deleteMovie);


module.exports = router;