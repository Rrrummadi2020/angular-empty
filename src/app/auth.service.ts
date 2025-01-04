import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() {
        console.log('Real auth service');
    }
    _isLogin = false;
    toggleLogin() {
        this._isLogin = !this._isLogin;
    }
    get isLogin() {
        return this._isLogin;
    }
}
