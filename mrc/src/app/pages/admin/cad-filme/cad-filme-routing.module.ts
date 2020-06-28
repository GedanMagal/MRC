import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadFilmeComponent } from './cad-filme.component';

const routes: Routes = [
    {
        path: '',
        component: CadFilmeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadFilmeRoutingModule { }