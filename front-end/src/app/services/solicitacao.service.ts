import { Injectable } from '@angular/core';
import {Usuario} from "../models/usuario";
import {CrudService} from "./base/crud-service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Prestador} from "../models/prestador";
import {map} from "rxjs/operators";
import {Solicitacao} from "../models/solicitacao";

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService extends CrudService<Solicitacao, Number> {


  constructor(protected _http: HttpClient) {
    super(_http, `${environment.apiURL}Solicitacao`);
  }
  findbyPrestador(id:number): Observable<Solicitacao[]> {
    return this._http.get<any>(this._base + "/prestador/" + id,  ).pipe(map((res)=> {return res }));;
  }
  findbyUsuario(id:number): Observable<Solicitacao[]> {
    return this._http.get<any>(this._base + "/usuario/" + id,  ).pipe(map((res)=> {return res }));;
  }

}
