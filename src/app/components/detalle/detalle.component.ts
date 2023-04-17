import { Component, Input } from '@angular/core';
import { CargaScriptsService } from "../../carga-scripts.service";
import { PasarDatosService } from "../../pasar-datos.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  datos: any;

  constructor( private _CargaScripts:CargaScriptsService, private route: ActivatedRoute ){
    _CargaScripts.Carga(["scripts"]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.datos = params['datos'];
    });
  }

}
