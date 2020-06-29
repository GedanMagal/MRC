import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module')
            .then(m => m.HomeModule)
      },
      {
        path: 'admin/cadastro',
        loadChildren: () =>
          import('./cad-filme/cad-filme.module')
            .then(m => m.CadFilmeModule)
      }
    ]
  }]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
