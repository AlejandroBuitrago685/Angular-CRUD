import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("Esto es el interceptor");

       /* const token = localStorage.getItem('tokenCabecera');
        if (!token) {
            return next.handle(req);
        }
        const headers = req.clone({
            headers: req.headers.set("TOKEN", "TOKEN: ${token}")
            
        });*/
        return next.handle(req);
    }
}