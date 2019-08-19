import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Teacher } from '../models/teacher';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class TeacherService{
   // private url:string='http://localhost:3007/teachers';
   private url='http://chervicontraining.com:3000/teachers'; 
   //observable source
    private contactDeletedSource=new Subject();
    private contactCreatedSource=new Subject<Teacher>();
    
    private config = { headers: { 'Content-Type': 'multipart/form-data' } };

    //observable stream
    contactCreated$=this.contactCreatedSource.asObservable();
    contactDeleted$=this.contactDeletedSource.asObservable();
    
    constructor( private http: Http){}
    
 //all contacts
getContacts():Observable<Teacher[]>{
    return this.http.get(`${this.url}`)
    .map(res=>res.json().teachers)
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
getContact(id):Observable<Teacher>{
 return this.http.get(`${this.url}/${id}`)
 .map(res=>res.json())
 .catch(this.handleError);
}

//update user details
updateContact(teacher:Teacher):Observable<Teacher>{
return this.http.put(`${this.url}/${teacher._id}`,teacher)
.map(teacher=>teacher.json())
.catch(this.handleError)
}

createTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.post(this.url,teacher)
    .map(res=>res.json())
    .do(teacher=>this.teacherCreated(teacher))
    .catch(this.handleError);
}

teacherDelete(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
    .do(res=>this.teacherDeleted())
    .catch(this.handleError);
}

//messages
teacherCreated(teacher:Teacher){
    console.log('New Teacher has been created!');
    this.contactCreatedSource.next(teacher);
}

teacherDeleted(){
    this.contactDeletedSource.next();
    console.log('Teacher has been deleted!');
}

}