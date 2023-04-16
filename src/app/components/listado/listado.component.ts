import { Component } from '@angular/core';
import { CargaScriptsService } from "../../carga-scripts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor( private _CargaScripts:CargaScriptsService, private router: Router ){
    _CargaScripts.Carga(["peticiones"]);
  }

}
