import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 打印请求成功的接口
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event.type === 4) {
                    console.log('请求成功：', req.url);
                }
            })
        );
    }
}
