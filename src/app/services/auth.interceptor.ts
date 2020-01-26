import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs";
var CONST = {
  LOGIN:'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g'
}
@Injectable({
  providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      request.url.includes(CONST.LOGIN)
    ) {
      console.log("eeeeeeeeeeeeeee",request);
      return next.handle(request);
    }
    var idToken = JSON.parse(localStorage.getItem("session")).idToken;
    console.log(idToken)
    request = request.clone({setParams:{
      auth:idToken
    }});
  
    return next.handle(request);
  }
}
