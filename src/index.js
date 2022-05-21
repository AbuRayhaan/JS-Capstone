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

    const commentPopup = document.querySelector('.commentPopup');
    const commentBtn = document.querySelectorAll('.commentBtn');

    commentBtn.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        catalog.classList.add('active');
        const popUp = document.createElement('div');
        commentPopup.innerHTML = '';
        popUp.innerHTML = `
        <div class="catalog-popUp d-flex">
          <i class="fa-solid fa-xmark"></i>
          <div class="movie-image hide1">
              <img class="img-pop" src = "${showList[i].image.original}" alt = "${showList[i].name}">
          </div>
  
          <div class="movie-info-pop d-flex">
              <p>${showList[i].summary}</p>
              <h3>COMMENTS</h3>
              <small class="commentCount">20 comments</small>
              <ul class="commentList">
                  <li>User1: Comment1</li>
                  <li>User2: Comment2</li>
                  <li>User3: Comment3</li>
                  <li>User4: Comment4</li>
                  <li>User5: Comment5</li>
              </ul>
              <form action="" class="inputComment d-flex">
                  <input class="username" type="text" name="" value="" placeholder="Your Name">
                  <input class="comment" type="text" name="" value="" placeholder="Your Comment">
                  <small class="msg"></small>
                  <button class="submitBtn">submit</button>
              </form>
          </div>
        </div>`
        commentPopup.appendChild(popUp);

        const closePopup = document.querySelector('.fa-xmark');
  
        closePopup.addEventListener('click', () => {
          console.log('click works');
          commentPopup.innerHTML = '';
          catalog.classList.remove('active');
        });
      });
    });
  }
}

loadShow();