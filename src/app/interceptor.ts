import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
import { tap, catchError, finalize } from 'rxjs/operators';

export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('=====old=====');
    // console.log(req);

    // const BaseUrl = 'http://localhost:5542/api/';
    const BaseUrl = 'http://114.33.3.174/api/';
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
        return Observable.throw(error);
      }),
      finalize(() => {
        setTimeout(() => {
          loading.style.display = 'none';
        }, 500);
      }));
  }
}
