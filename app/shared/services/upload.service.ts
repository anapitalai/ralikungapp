import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Upload } from '../models/upload';
import { FileUploader,FileSelectDirective } from 'ng2-file-upload';

@Component({
  templateUrl:'./app/upload/upload-create.component.html' 
})
export class UploadService {
    private uploadUrl="";
    uploader:FileUploader= new FileUploader({url:this.uploadUrl});
    attachementList:any=[];
       //observable source
       //private contactDeletedSource=new Subject();
       //private contactCreatedSource=new Subject<Upload>();
       //observable stream
       //contactCreated$=this.contactCreatedSource.asObservable();
       //contactDeleted$=this.contactDeletedSource.asObservable();

  constructor( private http:Http) {

  }
 //errr handling
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



uploadCreated(upload:Upload){
  console.log('New Teacher has been created!');
  //this.contactCreatedSource.next(upload);
}

  createUpload(upload:Upload):Observable<Upload>{
    return this.http.post(this.uploadUrl,upload)
    .map(res=>res.json())
    .do(teacher=>this.uploadCreated(upload))
    .catch(this.handleError);
}

/**
uploadCreated(upload:Upload){
  console.log('New Teacher has been created!');
  //this.contactCreatedSource.next(upload);
}**/

ngOnInit() {}


}