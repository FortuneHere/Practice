/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
    },
    rememberMyFilms: function(){
      for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        
        if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
      }
    },
    detectPersonalLevel: function(){
      console.log(personalMovieDB.count);
      let count = personalMovieDB.count;
      if(count < 10){
          console.log('Просмотрено довольно мало фильмов');
      }else if(count >= 10 && count < 30){
        console.log('Вы классический зритель');
      }else if(count >= 30){
        console.log('Вы киноман');
      }else {
        console.log('Произошла ошибка');
      }
    },
    showMyDB: function(hidden){
      if(!hidden){
      console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function(){
      if(personalMovieDB.privat){
        personalMovieDB.privat = false;
      }else{
        personalMovieDB.privat = true;
      }
    },
    writeYourGenres: function(){
      for(let i = 1; i < 2; i++){
        // const genre =  prompt(`Ваш любимый жанр под номером ${i}`, '');
        
        // if(genre === '' || genre === null){
        //   console.log('Вы ввели некорректные данные или не ввели их вообще');
        //   i--;          
        // } else {
        //   personalMovieDB.genres[i - 1] = genre;
        // }
        const genres =  prompt('Введите ваши любимые жанры через запятую').toLowerCase();

        if(genres === '' || genres === null){
          console.log('Вы ввели некорректные данные или не ввели их вообще');
          i--;          
        } else {
          personalMovieDB.genres = genres.split(', ');
          personalMovieDB.genres.sort();
        }
      }

      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
    }
};


