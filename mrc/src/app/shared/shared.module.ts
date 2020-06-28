import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';

import { TitlePageComponent } from './components/title-page/title-page.component';

@NgModule({
    declarations: [
        NavComponent,
        TitlePageComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavComponent,
        TitlePageComponent,
    ]
})
export class SharedModule { }