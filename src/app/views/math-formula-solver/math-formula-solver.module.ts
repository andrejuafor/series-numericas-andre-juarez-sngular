import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathFormulaSolverRoutingModule } from './math-formula-solver-routing.module';
import { MathFormulaSolverComponent } from './math-formula-solver.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorValueModalComponent } from './error-value-modal/error-value-modal.component';


@NgModule({
  declarations: [
    MathFormulaSolverComponent,
    ErrorValueModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MathFormulaSolverRoutingModule
  ]
})
export class MathFormulaSolverModule { }
