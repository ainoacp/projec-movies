const mongoose = require('mongoose');

const Movie = require('../api/models/movies.model'); 

const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    gender: 'Acción'
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    gender: 'Acción'
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    gender: 'Animación'
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    gender: 'Animación'
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    gender: 'Ciencia ficción'
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    gender: 'Comedia romántica'
  }
];

mongoose.set("strictQuery", false);

mongoose
.connect('mongodb+srv://root:root@cluster0.cc0jlxi.mongodb.net/movies?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0) {
        await Movie.collection.drop();
        console.log('movies deleted done');
    }
})
.catch((error) => console.log("error deleting movies", error))
.then(async () => {
    const movieMap = movies.map((movie) => new Movie(movie));
    await Movie.insertMany(movieMap);
    console.log("movies inserted done")
})
.catch((error) => console.log("error inserting movies", error))
.finally(() => mongoose.disconnect());