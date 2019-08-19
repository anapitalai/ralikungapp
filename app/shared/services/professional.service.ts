import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Professional } from '../models/professional';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ProfessionalService{
    //private url:string='http://localhost:3007/professionals';
    private url='http://chervicontraining.com:3000/professionals';
    //observable source
    private deletedProfessionalSource=new Subject();
    private createdProfessionalSource=new Subject<Professional>();
    //observable stream
    createdProfessional$=this.createdProfessionalSource.asObservable();
    deletedProfessional$=this.deletedProfessionalSource.asObservable();
    
    constructor( private http: Http){}
    
 //all contacts
getProfessionals():Observable<Professional[]>{
    return this.http.get(`${this.url}`)
    .map(res=>res.json().professionals)
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
getProfessional(id):Observable<Professional>{
 return this.http.get(`${this.url}/${id}`)
 .map(res=>res.json())
 .catch(this.handleError);
}

//update user details
updateProfessional(professional:Professional):Observable<Professional>{
return this.http.put(`${this.url}/${professional._id}`,professional)
.map(teacher=>teacher.json())
.catch(this.handleError)
}

createProfessional(teacher:Professional):Observable<Professional>{
    return this.http.post(this.url,teacher)
    .map(res=>res.json())
    .do(teacher=>this.createdProfessional(teacher))
    .catch(this.handleError);
}

deleteProfessional(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
    .do(res=>this.deletedProfessional())
    .catch(this.handleError);
}

//messages
createdProfessional(teacher:Professional){
    console.log('New Teacher has been created!');
    this.createdProfessionalSource.next(teacher);
}

deletedProfessional(){
    this.deletedProfessionalSource.next();
    console.log('Teacher has been deleted!');
}




}