import { Injectable } from '@angular/core';

@Injectable()
export class FakeAuthService {

  constructor() { 
    console.log('Fake auth service')
  }
}
