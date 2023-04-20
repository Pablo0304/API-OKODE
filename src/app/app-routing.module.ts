import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DocumentacionComponent } from "./components/documentacion/documentacion.component";

const routes: Routes = [
  {
    path: '', component: ListadoComponent
  },
  {
    path: 'movie', component: DetalleComponent
  },
  {
    path: 'documentation', component: DocumentacionComponent
  },
  {
    path: '**',
    redirectTo: 'documentation'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
