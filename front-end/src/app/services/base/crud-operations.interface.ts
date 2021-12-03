import {Observable} from "rxjs";


export interface CrudOperations<T, ID> {
  save(t: T): Observable<T>;
  update( t: T,id:number): Observable<T>;
  findOne(id: ID): Observable<T>;
  findAll(nome:String , page:Number,size:Number): Observable<T[]>;
  delete(id: ID): Observable<any>;
}
