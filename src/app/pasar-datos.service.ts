import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasarDatosService {

  constructor() { }

  private datosSubject = new Subject<any>();

  enviarDatos(datos: any) {
    this.datosSubject.next(datos);
  }

  obtenerDatos() {
    return this.datosSubject.asObservable();
  }

  public exponerEnvioDatos() {
    (window as any).enviarDatos = this.enviarDatos.bind(this);
  }

}
