import { Injectable } from '@angular/core';
import {Usuario} from "../models/usuario";
import {CrudService} from "./base/crud-service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Prestador} from "../models/prestador";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<Usuario, Number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.apiURL}Usuarios`);
  }
  login(email:string,senha:string): Observable<Usuario> {
    return this._http.get<any>(this._base + "/login", { params: new HttpParams().set('email', email).set('senha',senha) }  ).pipe(map((res)=> {return res }));;
  }
}
