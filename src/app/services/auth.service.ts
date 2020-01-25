import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var CONST = {
  LOGIN:'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g'
}
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload) {
    return this.http.post(CONST.LOGIN, payload);
  }
  
}
