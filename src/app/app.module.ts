import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';

// INICIO SERVICIOS
import{ CargaScriptsService } from "./carga-scripts.service";
import { PasarDatosService } from "./pasar-datos.service";
// FIN SERVICIOS

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargaScriptsService,
    PasarDatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
