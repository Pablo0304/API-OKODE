import { Component } from '@angular/core';
import { CargaScriptsService } from "../../carga-scripts.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_URL } from "../../../environments/environment";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  movies: any[] = [];
  query: any;

  constructor( private _CargaScripts:CargaScriptsService, private router: Router, private http: HttpClient ){
    _CargaScripts.Carga(["scripts"]);
  }

  getMovies(){
    this.http.get(`${API_URL}&query=${this.query}`).subscribe(
      (response: any) => {
        for (let a = 0; a < response.results.length; a++) {
          response.results[a].vote_average = response.results[a].vote_average.toFixed(1);
        }
        this.movies = response.results;
        console.log(this.movies);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getColor(vote: number){
    if(vote < 5){
      return 'url(../../../assets/photos/val-rojo.png)';
    } else if(vote < 6.5){
      return 'url(../../../assets/photos/val-naranja.png)';
    } else if(vote < 8.5){
        return 'url(../../../assets/photos/val-amarillo.png)';
    }  else {return 'url(../../../assets/photos/val-verde.png)';}
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.getMovies();
    }
  }

}
