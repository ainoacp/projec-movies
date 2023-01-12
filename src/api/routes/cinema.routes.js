const express = require('express');
const {
    getCinemas, 
    postCinema, 
    putCinema,
    deleteCinema
} = require('../controllers/cinema.controllers');

const router = express.Router();

router.get('/',  getCinemas);

router.post('/', postCinema);

router.put('/:id', putCinema);

router.delete('/:id', deleteCinema);


module.exports = router;