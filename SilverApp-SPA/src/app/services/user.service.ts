import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // 'http://localhost:5000/api/'
  baseUrl =  environment.apiUrl +  'Users/';
  // baseUrl =  environment.apiUrl +  'Auth/';

  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User; // 114

constructor(private http: HttpClient) { }

register(user: User) {
  return this.http.post(this.baseUrl + 'register' , user);
}

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model)
  /*.pipe(
     map((response: any) => {
         const user = response;
         if (user) {
           localStorage.setItem('token', user.token);
           localStorage.setItem('user', JSON.stringify(user.user)); // 114
           this.decodedToken = this.jwtHelper.decodeToken(user.token);
           this.currentUser = user.user; // 114
         }
     })
  )*/;
}

}
