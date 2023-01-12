const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const moviesRoutes = require('./src/api/routes/movies.routes');

const {connect} = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();



app.use(express.json());        
app.use(express.urlencoded({extended: true})); 

app.use('/movies', moviesRoutes);

app.listen(PORT, () => console.log('listening on port ', PORT));