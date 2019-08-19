import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FileUploader,FileSelectDirective } from 'ng2-file-upload';
import { Upload } from '../../shared/models/upload';
import { UploadService } from '../../shared/services/upload.service';


const uri ='http://localhost:3007/teacher/uploads';

@Component({
  styles:[`
  input.ng-valid.ng-touched{
    border-left:5px solid green;
  }
  input.ng-invalid.ng-touched{
    border-left:5px solid red;
  }

 `],
  templateUrl:'./app/upload/upload-create/upload-create.component.html' 
})
export class UploadCreateComponent implements OnInit {

  uploader:FileUploader= new FileUploader({url:uri});
  attachementList:any=[];


  constructor(private router: Router,private service:UploadService) {

    this.uploader.onCompleteItem=(item:any,response:any,status:any,headers:any)=>{
    this.attachementList.push(JSON.parse(response));
    }
  }

  upload:Upload={avatarImage:'',createdAt:'',updatedAt:''};
  errorMessage:string='';
  successMessage:string='';
  


  ngOnInit() {
  }
    
  createUpload(){
    this.successMessage='';
    this.errorMessage='';

    this.service.createUpload(this.upload)
    .subscribe(upload=>{
      this.successMessage='uploaded';
      this.router.navigate(['/teachers']);
      console.log('uploaded');
    })
  }

}