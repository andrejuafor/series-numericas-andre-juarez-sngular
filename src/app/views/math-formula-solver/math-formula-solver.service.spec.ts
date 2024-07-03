import { TestBed } from '@angular/core/testing';

import { MathFormulaSolverService } from './math-formula-solver.service';

describe('Test for MathFormulaSolver Service', () => {
  let service: MathFormulaSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathFormulaSolverService);
  }); 

  describe('Test for triangular function', () => {
    it('n = 1 - should return "1"', () => {
      expect(service.getTriangularSerie(1)).toBe(1)      
    })
    it('n = 2 - should return "3"', () => {
      expect(service.getTriangularSerie(2)).toBe(3)      
    })
    it('n = 3 - should return "6"', () => {
      expect(service.getTriangularSerie(3)).toBe(6)      
    })
    it('n = 4 - should return "10"', () => {
      expect(service.getTriangularSerie(4)).toBe(10)      
    })
    it('n = 5 - should return "15"', () => {
      expect(service.getTriangularSerie(5)).toBe(15)      
    })
    it('n = 6 - should return "21"', () => {
      expect(service.getTriangularSerie(6)).toBe(21)      
    })
    it('n = 7 - should return "28"', () => {
      expect(service.getTriangularSerie(7)).toBe(28)      
    })
    it('n = 8 - should return "36"', () => {
      expect(service.getTriangularSerie(8)).toBe(36)      
    })
    it('n = 9 - should return "45"', () => {
      expect(service.getTriangularSerie(9)).toBe(45)      
    })
    it('n = 10 - should return "55"', () => {
      expect(service.getTriangularSerie(10)).toBe(55)      
    })
  })
  
  describe('Test for primo function', () => {
    it('n = 1 should return "2"', () => {
      expect(service.getPrimeSerie(1)).toBe(2)      
    })
    it('n = 2 should return "3"', () => {
      expect(service.getPrimeSerie(2)).toBe(3)      
    })
    it('n = 3 should return "5"', () => {
      expect(service.getPrimeSerie(3)).toBe(5)      
    })
    it('n = 4 should return "7"', () => {
      expect(service.getPrimeSerie(4)).toBe(7)      
    })
    it('n = 5 should return "11"', () => {
      expect(service.getPrimeSerie(5)).toBe(11)      
    })
    it('n = 6 should return "13"', () => {
      expect(service.getPrimeSerie(6)).toBe(13)      
    })
    it('n = 7 should return "17"', () => {
      expect(service.getPrimeSerie(7)).toBe(17)      
    })
    it('n = 8 should return "19"', () => {
      expect(service.getPrimeSerie(8)).toBe(19)      
    })
    it('n = 9 should return "23"', () => {
      expect(service.getPrimeSerie(9)).toBe(23)      
    })
    it('n = 10 should return "29"', () => {
      expect(service.getPrimeSerie(10)).toBe(29)      
    })
  })
  
  describe('Test for fibonacci function', () => {
    it('n = 0 should return "0"', () => {
      expect(service.getFibonacciSerie(0)).toBe(0)      
    })
    it('n = 1 should return "1"', () => {
      expect(service.getFibonacciSerie(1)).toBe(1)      
    })
    it('n = 2 should return "1"', () => {
      expect(service.getFibonacciSerie(2)).toBe(1)      
    })
    it('n = 3 should return "2"', () => {
      expect(service.getFibonacciSerie(3)).toBe(2)      
    })
    it('n = 4 should return "3"', () => {
      expect(service.getFibonacciSerie(4)).toBe(3)      
    })
    it('n = 5 should return "5"', () => {
      expect(service.getFibonacciSerie(5)).toBe(5)      
    })
    it('n = 6 should return "8"', () => {
      expect(service.getFibonacciSerie(6)).toBe(8)      
    })
    it('n = 7 should return "13"', () => {
      expect(service.getFibonacciSerie(7)).toBe(13)      
    })
    it('n = 8 should return "21"', () => {
      expect(service.getFibonacciSerie(8)).toBe(21)      
    })
    it('n = 9 should return "34"', () => {
      expect(service.getFibonacciSerie(9)).toBe(34)      
    })
  })
});
