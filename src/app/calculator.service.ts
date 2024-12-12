import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private sharedService:SharedService) { }

  add(a: number, b: number) {
    this.sharedService.sharedMethod();
    return a + b;
  }
  multiply(a: number, b: number) { 
    return a * b;
  }
}
