import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loging(email: string, password: string): void {
    console.log('AuthService::loging', email, password);
    sessionStorage.setItem('isLogged', 'true');
  }

  logout(): void {
    console.log('AuthService::logout');
    sessionStorage.clear();
  }

  isLogged(): boolean {
    console.log('AuthService::isLogged');
    return !!sessionStorage.getItem('isLogged');
  }
  
}
