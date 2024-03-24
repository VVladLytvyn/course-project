
const countOfFilms = +prompt('сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
	count: countOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++){
	const a = prompt('один из последних просмотренных фильмов?', '');
	const b = prompt('во сколько оцените этот фильм?', +'');
	
	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done ');
	} else {
		console.log('error');
		i--;
	}
}  

// let i = 0;
// while (i < 2) {
// 	const a = prompt('the last watched movie?', '');
// 	const b = prompt('put the score of that movie', +''); 
	
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++;
// }


if (personalMovieDB.count < 10) {
	console.log('you have watched very few movies');
} else if (personalMovieDB >= 10 && personalMovieDB.count <= 30) {
	console.log('you like to spent time in front of tv');
} else if (personalMovieDB.count > 30) {
	console.log('you are a movieLover')
} else {
	console.log('error');
}

console.log(personalMovieDB);
