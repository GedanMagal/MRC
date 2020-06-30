import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';

import { TitlePageComponent } from './components/title-page/title-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NavComponent,
        TitlePageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        NavComponent,
        TitlePageComponent,
    ]
})
export class SharedModule { }