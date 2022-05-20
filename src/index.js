import './style.css';

const baseURL ='https://api.tvmaze.com/shows';

const getShow = async () => {
  const url = `${baseURL}`;
  const response = await fetch(url)
  const showData = await response.json();
  return showData
}

const loadShow = async () => {
  const showList = await getShow();
  const catalog = document.querySelector('.movie-container');

  for (let i = 0; showList.length = 15; i += 1) {
    const movie = document.createElement('div');
    movie.classList.add('movie-catalog');
    movie.innerHTML =
     `<div class="movie-image hide1">
      <img class="" src = "${showList[i].image.original}" alt = "${showList[i].name}">
      </div>

      <div class="movie-image hide">
      <img class="" src = "${showList[i].image.original}" alt = "${showList[i].name}">
      </div>

      <div class="movie-info">
  
          <div class="movie-like" id="like-container">
            <p class="movie-name">${showList[i].name}</p>
            <i class="fa-solid fa-heart"></i>
          </div>
  
          <div class="d-flex m-comment" id="comment-container">
              <button class="commentBtn" type="button">Comment</button>
              <button class="reserveBtn" type="button">Reservations</button>
          </div>
      </div>
    `;
    catalog.appendChild(movie);
  }

  const commentBtn = document.querySelectorAll('.commentBtn');
  const body = document.querySelector('body');

  
}

loadShow();