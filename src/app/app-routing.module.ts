import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  {
    path: '', component: ListadoComponent
  },
  {
    path: 'movie', component: DetalleComponent
  },
  {
    path: '**',
    redirectTo: 'movie'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
