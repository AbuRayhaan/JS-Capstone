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
     `<div class="movie-image">
      <img class="" src = "${showList[i].image.original}" alt = "${showList[i].name}">
      </div>

      <div class="movie-info">
  
          <div class="movie-like" id="like-container">
            <p class="movie-name">${showList[i].name}</p>
            <i class="fa-solid fa-heart">Likes</i>
          </div>
  
          <div class="movie-comment" id="comment-container">
              <button class="comment-link" type="button">Comment</button>
              <button class="reserve-link" type="button">Reservations</button>
          </div>
    `;
    catalog.appendChild(movie);
  }
}

loadShow();