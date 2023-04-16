var KEY = 'api_key=6c6b12ff64dcb4c12ae73d9cc8fa4381';
var BASE_URL = 'https://api.themoviedb.org/3/';
var SEARCH = '/search/movie?';
var API_URL = BASE_URL + SEARCH + KEY;

var grid = document.getElementById('grid');

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
  document.getElementById('logo').style.visibility = 'visible';
  let cont = 0;

  data.forEach(movie => {
    document.getElementById('logo').style.visibility = 'hidden';
    var {title, poster_path, vote_average, overview} = movie;
    vote_average = vote_average.toFixed(1);   // truncar con un decimal

    const mov = document.createElement('div');

    // INICIO ESTILOS
    mov.style.display = 'flex';
    mov.style.flexDirection = 'row';
    mov.style.alignItems = 'center';
    mov.style.width = '65%';
    mov.style.marginBottom = '10px';
    mov.style.borderStyle = 'outset';
    mov.style.borderColor = 'aqua';
    // FIN ESTILOSposition: relative; z-index: 9999;

    // INICIO EVENTO
    mov.id = `mov${cont}`;
    mov.addEventListener('click', () => {
      eventoDetalle(mov.id);
    });
    cont++;
    // FIN EVENTO

    let img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    mov.innerHTML = `
    <img style="width: 85px; height: 113px;" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}">
    <h3 style="margin-left: 5%; cursor: default;">${title}</h3>
    <div style="margin-right: 5px; margin-left: auto; background-image: ${getColor(vote_average)}; background-repeat: no-repeat; height: 35px; width: 35px;">
      <p style="font-size: 17px; margin-left: 3px; margin-top: 6px; cursor: default;">${vote_average}</p>
    </div>
    <div style="visibility: hidden; height: 20px; width: 20px;">${overview}</div>
    `;

    grid.appendChild(mov);
  });

}

function getColor(vote){
  if(vote < 5){
    return 'url(../../../assets/photos/val-rojo.png)';
  } else if(vote < 6.5){
    return 'url(../../../assets/photos/val-naranja.png)';
  } else if(vote < 8.5){
      return 'url(../../../assets/photos/val-amarillo.png)';
  }  else {return 'url(../../../assets/photos/val-verde.png)';}
}

// EVENTO ENTER
if(location.href != 'http://localhost:4200/movie'){
  const input = document.getElementById('title');
  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      getMovies();
    }
  });
}
// FIN EVENTO ENTER

// INICIO EVENTO DETALLE
function eventoDetalle(id){
  /*let peli = document.getElementById(`${id}`);
  console.log(`${peli.children[0].src}`);
  console.log(`${peli.children[1].innerHTML}`);
  console.log(`${peli.children[2].innerText}`);
  console.log(`${peli.children[3].innerHTML}`);
  let im = peli.children[0].src;
  let tit = peli.children[1].innerHTML;
  let vot = peli.children[2].innerText;
  let des = peli.children[3].innerHTML;

  let datos = [im, tit, vot, des];

  window.location.href = 'http://localhost:4200/movie';

  console.log(datos);
*/
}
// FIN EVENTO DETALLE
