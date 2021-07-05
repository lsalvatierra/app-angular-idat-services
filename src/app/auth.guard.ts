import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //const isUserLogged = sessionStorage.getItem("isLogged");
      const isUserLogged = this.authService.isLogged();
      if (!!isUserLogged) {
        return true;
      }
      //this.router.navigate(['login']);
      this.router.navigate(['login'], { queryParams: { blockedPage: state.url } });
      return false;
  }
  
}
