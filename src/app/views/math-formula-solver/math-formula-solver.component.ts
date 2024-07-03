import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MathFormulaSolverService } from './math-formula-solver.service';
import { NotifierService } from 'angular-notifier';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-math-formula-solver',
  templateUrl: './math-formula-solver.component.html',
  styleUrls: ['./math-formula-solver.component.scss']
})
export class MathFormulaSolverComponent {
  private subscription: Subscription[] = [];
  private readonly notifier: NotifierService;

  public checkoutForm: FormGroup;
  public serieResult: number | string;
  public showSerieResult: boolean;
  public showErrorValueModal: boolean;

  constructor(
    private fb: FormBuilder,
    private notifierService: NotifierService,
    private mathFormulaSolverService: MathFormulaSolverService,
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.initForm();
    this.setExternalVariables();
  }

  private setExternalVariables(): void {
    const subscription = this.mathFormulaSolverService.currentErrorValueModalStatus.subscribe(data => {
      this.showErrorValueModal = data;
    });
    this.subscription.push(subscription);
  }
  
  private initForm(): void {
    this.checkoutForm = this.fb.group({
      n_value: ['', Validators.required],
    })
  }
  
  public isControlValid(controlName: string): boolean {
    const control = this.checkoutForm.controls[controlName]
    return control.valid && (control.dirty || control.touched)
  }

  public isControlInvalid(controlName: string): boolean {
    const control = this.checkoutForm.controls[controlName]
    return control.invalid && (control.dirty || control.touched)
  }

  public keyPressNumbers(event: any): boolean {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  public validateEnteredNumber(event: any): any {
    let enteredNumber = Number(event.target.value);
    if (enteredNumber >= 11) this.showErrorValueModal = true;
  }

  public validateCheckout(): void {
    this.checkoutForm.markAllAsTouched()
    if (!this.checkoutForm.valid) {
      this.notifier.notify('error', 'Por favor, introduce un valor a n');
      return
    }
    this.getSeriesResult();
  }

  private getSeriesResult(): any {
    let nValue = Number(this.checkoutForm.get('n_value')?.value);
    this.serieResult = this.mathFormulaSolverService.getSeriesResult(nValue);
    this.showSerieResult = true;
  }

  public resetForm(): void {
    this.checkoutForm.reset();
    this.showSerieResult = false;
  }

  ngOnDestroy() {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
