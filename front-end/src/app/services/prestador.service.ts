import { Injectable } from '@angular/core';
import {CrudService} from "./base/crud-service";
import {Usuario} from "../models/usuario";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Prestador} from "../models/prestador";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PrestadorService extends CrudService<Prestador, Number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.apiURL}Prestador`);
  }

  login(email:string,senha:string): Observable<Prestador> {
    return this._http.get<any>(this._base + "/login", { params: new HttpParams().set('email', email).set('senha',senha) }  ).pipe(map((res)=> {return res }));;
  }

  busca(texto:string): Observable<Prestador[]> {
    return this._http.get<any>(this._base + "/busca", { params: new HttpParams().set('texto', texto)}  ).pipe(map((res)=> {return res }));;
  }
}
