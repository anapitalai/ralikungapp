import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../models/user';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class DashboardService{
    //private url:string='http://localhost:3007/users';
    private url='http://chervicontraining.com:3000/users';
    //observable source
    private userDeletedSource=new Subject();
    private userCreatedSource=new Subject<User>();
    //observable stream
    userCreated$=this.userCreatedSource.asObservable();
    userDeleted$=this.userDeletedSource.asObservable();
    
    constructor( private http: Http){}
    


 //all contacts
getUsers():Observable<User[]>{
    return this.http.get(this.url)
    .map(res=>res.json())
    .catch(this.handleError);
}

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

//get single contact
getUser(id):Observable<User>{
 return this.http.get(`${this.url}/${id}`)
 .map(res=>res.json())
 .catch(this.handleError);
}

//get single user profile image
getUserProfile(id):Observable<User>{
    return this.http.get(`${this.url}/${id}`)
    .map(res=>res.json())
    .catch(this.handleError);
   }
   


//update user details
updateUser(user:User):Observable<User>{
return this.http.put(`${this.url}/${user._id}`,user)
.map(user=>user.json())
.catch(this.handleError)
}


//update user details
updater(user:User):Observable<User>{
    return this.http.put(`${this.url}/update/${user._id}`,user)
    .map(user=>user.json())
    .catch(this.handleError)
    }
    



createUser(user:User):Observable<User>{
    return this.http.post(`${this.url}/signup`,user)
    .map(res=>res.json())
    .do(user=>this.userCreated(user))
    .catch(this.handleError);
}

userDelete(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
    .do(res=>this.userDeleted())
    .catch(this.handleError);
}

//messages
userCreated(teacher:User){
    console.log('New Teacher has been created!');
    this.userCreatedSource.next(teacher);
}

userDeleted(){
    this.userDeletedSource.next();
    console.log('Teacher has been deleted!');
}

}