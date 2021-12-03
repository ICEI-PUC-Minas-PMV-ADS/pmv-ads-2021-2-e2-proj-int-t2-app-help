import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { CrudOperations } from './crud-operations.interface';
import {map, take} from "rxjs/operators";

//https://jasonwhite.xyz/posts/2019/11/16/angular-8-creating-a-generic-crud-service/



export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) {}

  save(t: T): Observable<T> {
    return this._http.post<any>(this._base, t).pipe(map((res)=> {return res }));
  }

  update( t: T, id:number): Observable<T> {
    return this._http.put<any>(this._base + "/" + id , t, {}).pipe(map((res)=> {return res }));
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<any>(this._base + "/" + id).pipe(map((res)=> {return res }));;
  }

  findAll(): Observable<T[]> {
    return this._http.get<any>(this._base
    ).pipe(map((res)=> {
      return res }));
  }

  findAllFilter(filter:any): Observable<T[]> {
      return this._http.post<any>(this._base + "/findbyfilter"  , filter).pipe(map((res)=> {return res }));
  }

  delete(id: ID): Observable<String> {
    return this._http.delete<any>(this._base + '/' + id).pipe(map((res)=> {return res }));
  }




}
