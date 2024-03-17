
const countOfFilms = prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
	count: countOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const lastWachedMovie = prompt('один из последних просмотренных фильмов?', ''),
				scoreFilm = prompt('во сколько оцените этот фильм?', ''),
				lastWachedMovie_1 = prompt('один из последних просмотренных фильмов?', ''),
				scoreFilm_1	= prompt('а этот во сколько оцените?', '')	 


personalMovieDB.movies[lastWachedMovie] = scoreFilm;
personalMovieDB.movies[lastWachedMovie_1] = scoreFilm_1;			

console.log(personalMovieDB);