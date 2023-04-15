import { Component } from '@angular/core';
import { CargarScriptsService } from "../../cargar-scripts.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor( private _CargarScripts:CargarScriptsService ){
    _CargarScripts.Carga(["peticiones"]);
  }

}
