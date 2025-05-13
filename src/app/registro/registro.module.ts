import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { CrudComponent } from './pages/crud/crud.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule
  ]
})
export class RegistroModule { }
