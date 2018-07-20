import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

export class RequestInterceptor implements HttpInterceptor {
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

    return next.handle(copied);
  }
}
