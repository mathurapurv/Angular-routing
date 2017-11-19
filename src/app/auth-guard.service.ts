import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor( private router: Router ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    console.log('inside canActivate');

    this.router.navigate(['/users']) ;


    return true;



  }

}
