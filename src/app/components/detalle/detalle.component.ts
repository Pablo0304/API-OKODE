import { Component, Input } from '@angular/core';
import { CargaScriptsService } from "../../carga-scripts.service";
import { PasarDatosService } from "../../pasar-datos.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  movie: any;

  constructor( private _CargaScripts:CargaScriptsService, private router: Router, private pasarDatos: PasarDatosService ){
    //_CargaScripts.Carga(["scripts"]);
  }

  ngOnInit() {
    this.movie = this.pasarDatos.movie;
    if(this.movie == undefined){   // Si se ha recargado la página...a la ventana de inicio
      this.router.navigate(['/']);
    }
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

  volver(){
    this.router.navigate(['/']);   // Botón volver...
  }

}
