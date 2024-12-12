import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log('constructo got calle');
  }

  sharedMethod() { 
    console.log('Shared Method got called!!!');
    
  }
}
