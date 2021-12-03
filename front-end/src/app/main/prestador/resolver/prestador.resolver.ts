import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Prestador} from "../../../models/prestador";
import {PrestadorService} from "../../../services/prestador.service";

@Injectable({
  providedIn: 'root'
})
export class PrestadorResolver implements Resolve<Prestador> {
  constructor(private service: PrestadorService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestador> {
    if (route.params && route.params['id']) {
      return this.service.findOne(route.params['id']);
    }

    return of(new Prestador(null));
  }
}
