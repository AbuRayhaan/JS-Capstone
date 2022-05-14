import './style.css';
import movie1 from '../images/movie1.jpg';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';
import movie4 from '../images/movie4.jpg';
import movie5 from '../images/movie5.jpg';
import movie6 from '../images/movie6.jpg';
import movie7 from '../images/movie7.jpg';
import movie8 from '../images/movie8.jpg';
import movie9 from '../images/movie9.jpg';

const collection = [
  {
    id: 1,
    design: movie1,
    movie: 'VICE',
  },
  {
    id: 2,
    design: movie2,
    movie: 'CRAZY',
  },
  {
    id: 3,
    design: movie3,
    movie: 'INFILTRATE HATE',
  },
  {
    id: 4,
    design: movie4,
    movie: 'GREEN BOOK',
  },
  {
    id: 5,
    design: movie5,
    movie: 'BLACK PANTHER',
  },
  {
    id: 6,
    design: movie6,
    movie: 'ROMA',
  },
  {
    id: 7,
    design: movie7,
    movie: 'FEARLESS',
  },
  {
    id: 8,
    design: movie8,
    movie: 'FAVOURITE',
  },
  {
    id: 9,
    design: movie9,
    movie: 'A STAR IS BORN',
  },
];

const catalog = document.querySelector('.movie-container');

// const body = document.querySelector('body');
// body.append(myMovie1);

for (let i = 0; i < collection.length; i += 1) {
  catalog.innerHTML += `<div class="movie-catalog">
  <div class="movie-image">
  <img src = "${collection[i].design}" alt = "${collection[i].movie}">
  </div>

  <div class="movie-info">
      <p class="movie-name">${collection[i].movie}</p>
      <i class="fa-solid fa-heart"></i>
  </div>
</div>`;
}
