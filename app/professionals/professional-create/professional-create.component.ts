import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Professional } from '../../shared/models/professional';
import { ProfessionalService } from '../../shared/services/professional.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  templateUrl:'./app/professionals/professional-create/professional-create.component.html' 
})
export class ProfessionalCreateComponent implements OnInit {
  constructor(private http:Http,private router: Router,private service:ProfessionalService) {}

  form:FormGroup;
  professional:Professional={name:'',description:'',images:''};
  errorMessage:string='';
  successMessage:string='';
  filesToUpload: Array<File> = [];

    ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl(''),
      description:new FormControl(''),
      images:new FormControl('')
    });
  }



  onFileSelected(event){
    this.filesToUpload = <Array<File>>event.target.files;
  }
  

  createProfessional(){
    this.successMessage='';
    this.errorMessage='';
    console.log(this.form);
    console.log(this.form.value);

    const files: Array<File> = this.filesToUpload;
    const fd = new FormData();

    for(let i =0; i < files.length; i++){
      fd.append('images', files[i], files[i]['name']);
      fd.append('name', this.form.value.name);
      fd.append('description', this.form.value.description);
  }


    //this.http.post('http://localhost:3007/professionals',fd)
    this.http.post('http://chervicontraining.com:3000/professionals',fd)
    .subscribe(res=>{
      console.log(res);
    })
  }



}