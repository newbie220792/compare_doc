import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const userToken = localStorage.getItem('userToken');
  if (!userToken) {
    location.href = '/login';
    return next(req);
  }
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${userToken}`),
  });
  return next(modifiedReq);
}
