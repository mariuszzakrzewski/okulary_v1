import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StronaComponent } from './strona/strona.component';
import { PipeModule } from '../pipe/pipe.module';
import {StronaService} from '../service/strona.service';

@NgModule({
    declarations: [StronaComponent],
    imports: [
        CommonModule,
        PipeModule
    ],
    exports: [StronaComponent],
    providers: [StronaService]
})
export class StronaModule { }
