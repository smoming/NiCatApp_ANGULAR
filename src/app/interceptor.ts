
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
// import 'rxjs/add/operator/do';
import { tap, catchError, finalize } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('=====old=====');
    // console.log(req);

    // python
    // const BaseUrl = 'http://localhost:8000/api/';
    // java
    // const BaseUrl = 'http://localhost:8080/api/';
    // dotnet
    // const BaseUrl = 'http://114.33.3.174/api/';
    const BaseUrl = environment.BASE_API_URL;
    if (BaseUrl === '') {
      console.log('BaseUrl is empty, options: dotnet, java, python, ex: ng serve -c java -o');
    }

    const copied = req.clone({
      // setHeaders: { Authorization: 'Token Token_admin_id'},
      // params: req.params.set('auth', 'Token'),
      url: BaseUrl + req.url
    });
    // console.log('=====new=====');
    // console.log(copied);

    const loading: HTMLElement = document.getElementById('loader') as HTMLElement;
    loading.style.display = 'block';

    return next.handle(copied).pipe(tap(event => {
      // console.log('response interceptor...');
      // console.log(event);
      // if ((<HttpResponse<any>>event).status === 200) {
      //   loading.style.display = 'none';
      // }
    }),
      catchError(error => {
        return observableThrowError(error);
      }),
      finalize(() => {
        setTimeout(() => {
          loading.style.display = 'none';
        }, 500);
      }));
  }
}
