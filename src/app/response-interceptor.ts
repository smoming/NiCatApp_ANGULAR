import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
import { tap } from 'rxjs/operators';

export class ResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(tap(event => {
      // console.log('response interceptor...');
      // console.log(event);
    }));
  }
}
