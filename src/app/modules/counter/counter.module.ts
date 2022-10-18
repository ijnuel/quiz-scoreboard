import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CylinderCounterComponent } from './cylinder-counter/cylinder-counter.component';


@NgModule({
  declarations: [
    CounterComponent,
    CylinderCounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
