import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import {AuthHttp,JwtHelper} from 'angular2-jwt';
import { TeacherService } from '../../shared/services/teacher.service';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl:'./app/auth/auth.component.html' 
})
export class AuthService {
    //private authUrl='http://localhost:3007/users/login';
    private authUrl='http://chervicontraining.com:3000/users/login';
    private loggedIn: boolean=false;
     private token = localStorage.getItem('token');

  constructor( private authHttp:AuthHttp) {
    this.loggedIn=!!localStorage.getItem('token');
  }

  isLoggedIn(){
      return this.loggedIn;
  }


  login(email:string,password:string):Observable<string>{
    return this.authHttp.post(`${this.authUrl}`,{email,password})
    .map(res=>res.json())
    .do(res=>{
      //const expiresAt=JSON.stringify(((this.jwtHelper.decodeToken(this.token)).exp) * 1000 + new Date().getTime());
      if (res.token) {
      localStorage.setItem('token',res.token);
      //localStorage.setItem('expiresAt',expiresAt);
      this.loggedIn=true;

      this.useJwtHelper();
      
    }

    })
    .catch(this.handleError);
    
  }
  
 //logout
 logout(){
   localStorage.removeItem('token');
   this.loggedIn=false;
 }

//testing

jwtHelper: JwtHelper = new JwtHelper();

useJwtHelper() {
  var token = localStorage.getItem('token');
  //var expirationDate=this.jwtHelper.getTokenExpirationDate(token);
  //const decodedTkn=this.jwtHelper.decodeToken(token).exp;
  console.log(
    this.jwtHelper.decodeToken(token),
    this.jwtHelper.getTokenExpirationDate(token),
    this.jwtHelper.isTokenExpired(token)
    
  );
}

    
//handle errors
private handleError(err){
  let errMessage:string;
  if(err instanceof Response){
      let body=err.json() || '';
      let error=body.error || JSON.stringify(body);
      errMessage=`${err.status}-${err.statusText || ''} ${error}`;
  }
  else{
      errMessage = err.message ? err.message: err.toString();
  }
return Observable.throw(errMessage);
}


ngOnInit() {}


}