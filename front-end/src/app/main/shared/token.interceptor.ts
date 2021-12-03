import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";



const accessTokenKey = 'access_token';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (request.url.includes(environment.apiURL)) {
      request = request.clone({
        setHeaders: {
          "Bypass-Tunnel-Reminder": `true`
        }
      });
    }


    return next.handle(request);
  }
}
