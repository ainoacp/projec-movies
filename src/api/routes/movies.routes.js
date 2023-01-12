const express = require('express');
const {getAllMovies, getMovieById, getMovieByTitle, getMovieByGender, getMovieAfter2010, getMovieByYear} = require('../controllers/movies.controllers');

const router = express.Router();

router.get('/',  getAllMovies);
router.get('/:id',  getMovieById);
router.get('/title/:title',  getMovieByTitle);
router.get('/gender/:gender',  getMovieByGender);
router.get('/year/:year',  getMovieByYear);


module.exports = router;