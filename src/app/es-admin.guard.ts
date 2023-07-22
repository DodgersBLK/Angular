import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SeguridadService } from './seguridad/seguridad.service';
import { Observable } from 'rxjs';


export class EsAdminGuard implements CanActivate{
  constructor(private seguridadService: SeguridadService, private router:Router){  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.seguridadService.obtenerRol() === 'admin'){
      return true;
    }
    this.router.navigate(['/login']);
    return true;
  }
}