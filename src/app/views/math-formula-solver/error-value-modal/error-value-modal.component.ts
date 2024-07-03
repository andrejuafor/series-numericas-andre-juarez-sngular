import { Component } from '@angular/core';
import { MathFormulaSolverService } from '../math-formula-solver.service';

@Component({
  selector: 'app-error-value-modal',
  templateUrl: './error-value-modal.component.html',
  styleUrls: ['./error-value-modal.component.scss']
})
export class ErrorValueModalComponent {
  
  constructor(
    private mathFormulaSolverService: MathFormulaSolverService,
  ) {}

  public closeModal(): void {
    this.mathFormulaSolverService.showErrorValueModal(false);
  }
}
