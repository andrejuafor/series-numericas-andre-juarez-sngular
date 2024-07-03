import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { primeList } from './math-variables/math-variables';

@Injectable({
  providedIn: 'root'
})
export class MathFormulaSolverService {
  private setErrorValueModal = new BehaviorSubject<boolean>(false)
  currentErrorValueModalStatus = this.setErrorValueModal.asObservable()

  constructor() { }

  public showErrorValueModal(data: any): void {
    this.setErrorValueModal.next(data)
  }

  public getTriangularSerie(n_value: number): any {
    return (n_value * (n_value + 1)) / 2;
  }

  public getPrimeSerie(n_value: number): any {
    if (n_value <= 11) {
      return primeList[n_value].value;
    } else {
      return 'ERR!';
    } 
  }

  public getFibonacciSerie(n_value: number): any {
    if (n_value <= 1) {
      return n_value;
    }
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n_value; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  public getSeriesResult(n_value: number): any {
    let primeValue = this.getPrimeSerie(n_value);
    let triangularValue = this.getTriangularSerie(n_value + 1);
    let fibonacciValue = this.getFibonacciSerie(n_value + 1);

    return (2 * triangularValue) - (2 * primeValue) + (fibonacciValue);
  }
}
