import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let isLogin = sessionStorage.getItem('token')!;
      console.log(isLogin);
      if (isLogin) {
        // this.router.navigate(['home']);
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
