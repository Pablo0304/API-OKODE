const KEY = 'api_key=6c6b12ff64dcb4c12ae73d9cc8fa4381';
const BASE_URL = 'https://api.themoviedb.org/3/';
const SEARCH = '/search/movie?';
const API_URL = BASE_URL + SEARCH + KEY;

const grid = document.getElementById('grid');

function getMovies(){

  let keyword = document.getElementById('title').value;
  keyword = '&query=' + keyword;
  let url = API_URL + keyword;

  fetch(url).then(res => res.json()).then(data => {

    showMovies(data.results);

  })

}

function showMovies(data){

  grid.innerHTML = '';

  data.forEach(movie => {
    var {title, poster_path, vote_average, overview} = movie;
    vote_average = vote_average.toFixed(1);   // truncar con un decimal

    const mov = document.createElement('div');

    // INICIO ESTILOS
    mov.style.display = 'flex';
    mov.style.flexDirection = 'row';
    mov.style.alignItems = 'center';
    mov.style.width = '800px';
    mov.style.marginBottom = '10px';
    mov.style.borderStyle = 'outset';
    mov.style.borderColor = 'aqua';
    // FIN ESTILOS

    mov.innerHTML = `
    <img style="width: 85px; height: 113px;" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
    <h3 style="margin-left: 30px;">${title}</h3>
    <span style="font-size: 30px; margin-right: 5px; margin-left: auto; color: ${getColor(vote_average)}">${vote_average}</span>
    `;

    grid.appendChild(mov);
  });

}

function getColor(vote){
  if(vote < 5){
    return 'red';
  } else if(vote < 6.5){
    return 'orange';
  } else if(vote < 8.5){
      return 'yellow';
  }  else {return 'green';}
}

// EVENTO ENTER
const input = document.getElementById('title');

input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    getMovies();
  }
});
// FIN EVENTO ENTER
