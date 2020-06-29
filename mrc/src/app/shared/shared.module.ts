import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';

import { TitlePageComponent } from './components/title-page/title-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavComponent,
        TitlePageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent,
        TitlePageComponent,
    ]
})
export class SharedModule { }