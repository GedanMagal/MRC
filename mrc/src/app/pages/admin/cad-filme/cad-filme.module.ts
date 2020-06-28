import { NgModule } from '@angular/core';
import { CadFilmeRoutingModule } from './cad-filme-routing.module';
import { CadFilmeComponent } from './cad-filme.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CadFilmeComponent
    ],
    imports: [
        CommonModule,
        CadFilmeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ]
})
export class CadFilmeModule { }