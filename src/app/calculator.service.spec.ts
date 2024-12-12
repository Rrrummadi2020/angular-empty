import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { SharedService } from './shared.service';

describe('Calculator service', () => {
  let sharedService, calculatorService: CalculatorService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[SharedService,CalculatorService]
    })
    calculatorService = TestBed.inject(CalculatorService);
    sharedService = TestBed.inject(SharedService);
    console.log('before each got called');
  });
  it('should add two input', () => {
    expect(calculatorService.add(1, 4)).toBe(5);
  });

  it('should multiply two numbers', () => {
    expect(calculatorService.multiply(1, 4)).toBe(4);
  });
});
