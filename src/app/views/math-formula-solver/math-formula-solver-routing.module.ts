import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathFormulaSolverComponent } from './math-formula-solver.component';

const routes: Routes = [
  {
    path: '',
    component: MathFormulaSolverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathFormulaSolverRoutingModule { }
