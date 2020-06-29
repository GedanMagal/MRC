import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('./pages/admin/admin.module')
      .then(m => m.AdminModule)
},
{
  path: 'admin',
  loadChildren: () =>
    import('./pages/admin/admin.module')
      .then(m => m.AdminModule)
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
