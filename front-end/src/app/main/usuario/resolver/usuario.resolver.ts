import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Usuario} from "../../../models/usuario";
import {UsuarioService} from "../../../services/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolver implements Resolve<Usuario> {
  constructor(private service: UsuarioService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario> {
    if (route.params && route.params['id']) {
      return this.service.findOne(route.params['id']);
    }

    return of(new Usuario(null));
  }
}
