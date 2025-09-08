// PURE FUNCTIONS

const calculateAverage = (ratings) =>
    ratings.reduce((sum, r) => sum + r, 0) / ratings.length;

const addAverageRating = (movie) => ({
    ...movie,
    averageRating: calculateAverage(movie.ratings),
});

const filterByGenre = (genre, movies) =>
    movies.filter((movie) => movie.genre === genre);

const filterByYear = (minYear, movies) =>
    movies.filter((movie) => movie.year >= minYear);

const sortByRating = (movies) =>
    [...movies].sort((a, b) => b.averageRating - a.averageRating);

// HIGHER ORDER FUNCTIONS

const pipe = (...fns) => 
    (input) => fns.reduce((acc, fn) => fn(acc), input);

const compose = (...fns) =>
    (input) => fns.reduceRight((act, fn) => fn(acc), input);
