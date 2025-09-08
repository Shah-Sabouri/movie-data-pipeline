// ------------------ PURE FUNCTIONS -----------------------

// To calculate average rating
const calculateAverage = (ratings) =>
    ratings.reduce((sum, r) => sum + r, 0) / ratings.length;

// Add average rating for movies
const addAverageRating = (movie) => ({
    ...movie,
    averageRating: calculateAverage(movie.ratings),
});

// Filter movies by genre
const filterByGenre = (genre, movies) =>
    movies.filter((movie) => movie.genre === genre);

// Filter movies by release year, ascending
const filterByYear = (minYear, movies) =>
    movies.filter((movie) => movie.year >= minYear);

// Sort movies by average rating, descending
const sortByRating = (movies) =>
    [...movies].sort((a, b) => b.averageRating - a.averageRating);

// ---------------------------------------------------------

// --------------- HIGHER ORDER FUNCTIONS ------------------

// Run functions in specific order (left to right)
const pipe = (...fns) => 
    (input) => fns.reduce((acc, fn) => fn(acc), input);

// Same thing here but in opposite
const compose = (...fns) =>
    (input) => fns.reduceRight((act, fn) => fn(acc), input);

// ---------------------------------------------------------

// HARD CODED EXAMPLE DATA

const movies = [
    { id: 1, title: "Inception", genre: "SciFi", year: 2010, ratings: [9, 8, 9, 7, 8] },
    { id: 2, title: "The Matrix", genre: "SciFi", year: 1999, ratings: [9, 8, 9, 7, 8] },
    { id: 3, title: "Titanic", genre: "Romance", year: 1997, ratings: [7, 8, 6, 7, 8] },
    { id: 4, title: "Avatar", genre: "SciFi", year: 2009, ratings: [8, 7, 8, 9, 7] },
];

// ---------------------------------------------------------

// -------- EXAMPLE PIPELINE FOR PROCESSING MOVIES ---------

const processMovies = pipe(
    (ms) => ms.map(addAverageRating),
    (ms) => filterByGenre("SciFi", ms),
    (ms) => filterByYear("2000", ms),
    sortByRating
);

// ---------------------------------------------------------

console.log("Results: ", processMovies(movies));