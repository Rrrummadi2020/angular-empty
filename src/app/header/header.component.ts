import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-header',
    standalone: true,
    providers: [AuthService],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    isLogin = false;
    authService: AuthService = inject(AuthService);
    ngOnInit() {
      this.getAuthStatus();
    }
    onToggle() {
        this.authService.toggleLogin();
  }
  getAuthStatus() { 
    this.isLogin = this.authService.isLogin;
  }
}

