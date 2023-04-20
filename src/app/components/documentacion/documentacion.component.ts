import { Component } from '@angular/core';
import { CargaScriptsService } from 'src/app/carga-scripts.service';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent {

  ngIf1 = '&lt;img *ngIf="movies.length == 0">';
  ngFor = '&lt;div *ngFor="let movie of movies;">';
  ngIf2 = '&lt;div class="main" *ngIf="movie != undefined">';
  gradient = `body{
  background: #1f4037;
  background: -webkit-linear-gradient(to right, #95caa8, #69c5b0);
  background: linear-gradient(to right, #95caa8, #61c8b2, #5ec3ba, #0ab1e3);
}`;
  colValHTML = `&lt;div class="valoracion" style="background-image: {{getColor(movie.vote_average)}};">
  &lt;p id="valor">{{movie.vote_average}}&lt;/p>
&lt;/div>`;
  colValMet = `getColor(vote: number): string{
  if(vote &lt; 5){
    return 'url(../../../assets/photos/val-rojo.png)';
  } else if(vote &lt; 6.5){
    return 'url(../../../assets/photos/val-naranja.png)';
  } else if(vote &lt; 8.5){
    return 'url(../../../assets/photos/val-amarillo.png)';
  }  else {return 'url(../../../assets/photos/val-verde.png)';}
}`;
  PrimeNG = `&lt;p-button label="Volver" styleClass="p-button-secondary p-button-rounded p-button-raised"
(click)="volver()" id="volver"&gt;&lt;/p-button&gt;`;
  volver = `volver(){
  this.router.navigate(['/ruta']);   // Bot&oacute;n volver...
}`;
  getMovies = `getMovies(){
  this.http.get(API_URL&query=this.query).subscribe(
    (response: any) => {
      this.movies = response.results;
    },
    (error) => {
      console.log(error);
    }
  );
}`;
  cargaScripts = `Carga(archivos:string[]){
  for (let archivo of archivos) {
    let script = document.createElement("script");
    script.src = "../assets/scripts/" + archivo + ".js";
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
  }
}`;
  navigate = `this.router.navigate(['/ruta']);`;
  trataDatos = `for (let a = 0; a < response.results.length; a++) {
  if (response.results[a].vote_average == 10) {
    response.results[a].vote_average = response.results[a].vote_average.toFixed(0);
  }else{response.results[a].vote_average = response.results[a].vote_average.toFixed(1);}
  response.results[a].original_language = response.results[a].original_language.toUpperCase();
}`;
  keyDown = `onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    this.getMovies();
  }
}`;

  constructor(private _CargaScripts: CargaScriptsService){
    //_CargaScripts.Carga(["scripts"]);
  }

}
