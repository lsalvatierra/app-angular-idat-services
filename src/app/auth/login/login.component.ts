import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,private authService: AuthService ) { }

  ngOnInit(): void {
  }

  onSubmit(userEmailInput: HTMLInputElement, userPasswordInput: HTMLInputElement): void {
    //console.log('AuthService::loging', userEmailInput, userPasswordInput);
    //sessionStorage.setItem('isLogged', 'true');
    this.authService.loging(userEmailInput.value, userPasswordInput.value);
    this.router.navigate(['dashboard']);
  }

}
