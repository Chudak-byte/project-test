"use srtict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Яку кількість фільмів ви переглянули?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Яку кількість фільмів ви переглянули?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt("Один із останніх переглянутих фільмів", ""),
      b = prompt("На скільки його оціните?", "");

    if (
      a != null &&
      b != null &&
      a != "" &&
      b != "" &&
      a.length < 50 &&
      b.length < 50
    ) {
      personalMovieDB.movies[a] = b;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    console.log("Переглянуто дуже мало фільмів!");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log("Ви класичний глядач!");
  } else if (personalMovieDB.count > 30) {
    console.log("Ви кіноман!");
  } else {
    console.log("Сталась помилка!");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } 

}
showMyDB(personalMovieDB.private)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    
    personalMovieDB.genres[i - 1] = prompt("Ваш улюблений жанр під номером ${i}");
  }
}
writeYourGenres();

console.log(personalMovieDB);