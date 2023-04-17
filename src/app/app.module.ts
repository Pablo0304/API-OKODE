import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';

// INICIO SERVICIOS
import{ CargaScriptsService } from "./carga-scripts.service";
import { HttpClientModule } from '@angular/common/http';
import { PasarDatosService } from "./pasar-datos.service";
import { FormsModule } from '@angular/forms';
// FIN SERVICIOS

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CargaScriptsService,
    PasarDatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
