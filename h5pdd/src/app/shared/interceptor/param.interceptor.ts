import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 克隆请求，并在url中注入参数 interceptor: true
        const modifiedReq = req.clone({
            setParams: {
                interceptor: 'true'
            }
        });

        // 继续处理请求
        return next.handle(modifiedReq);
    }
}
