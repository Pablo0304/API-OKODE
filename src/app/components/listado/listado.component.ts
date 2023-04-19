import { Component } from '@angular/core';
import { CargaScriptsService } from "../../carga-scripts.service";
import { PasarDatosService } from "../../pasar-datos.service";
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

  constructor( private _CargaScripts:CargaScriptsService, private router: Router, private http: HttpClient, private pasarDatos: PasarDatosService ){
    //_CargaScripts.Carga(["scripts"]);
  }

  getMovies(){
    this.http.get(`${API_URL}&query=${this.query}`).subscribe(
      (response: any) => {

        // INICIO CAMBIAR CAMPOS
        for (let a = 0; a < response.results.length; a++) {
          if (response.results[a].vote_average == 10) {
            response.results[a].vote_average = response.results[a].vote_average.toFixed(0);   // Si es 10 quitar dos decimales
          }else{response.results[a].vote_average = response.results[a].vote_average.toFixed(1);}   // Si es otra cosa quitar 1
          response.results[a].original_language = response.results[a].original_language.toUpperCase();
        }
        // FIN CAMBIAR CAMPOS

        this.movies = response.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getColor(vote: number): string{
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

  detalle(i: number){
    // INICIO PASAR DATOS
    this.pasarDatos.movie = this.movies[i];
    // FIN PASAR DATOS

    // INICIO CAMBIAR RUTA
    this.router.navigate(['/movie']);
    // FIN CAMBIAR RUTA
  }

}
