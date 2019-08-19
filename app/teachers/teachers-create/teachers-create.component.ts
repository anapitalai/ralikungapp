import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Teacher } from '../../shared/models/teacher';
import { TeacherService } from '../../shared/services/teacher.service';

const uri = 'http://localhost:3007/teachers';

@Component({
  styles: [`
  input.ng-valid.ng-touched{
    border-left:5px solid green;
  }
  input.ng-invalid.ng-touched{
    border-left:5px solid red;
  }

 `],
  templateUrl: './app/teachers/teachers-create/teachers-create.component.html'
})

export class TeachersCreateComponent implements OnInit {
  constructor(private http: Http, private router: Router, private service: TeacherService, private fb: FormBuilder) {

  }

  form: FormGroup;
  teacher: Teacher = { name: '', description: '', avatarImage: '' };
  errorMessage: string = '';
  successMessage: string = '';
  filesToUpload: Array<File> = [];

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      avatarImage: new FormControl('')
    });
  }



  onFileSelected(event) {
    this.filesToUpload = <Array<File>>event.target.files;
  }

  

    

  createTeacher() {
    this.successMessage = '';
    this.errorMessage = '';
    console.log(this.form);
    console.log(this.form.value);
    
    const files: Array<File> = this.filesToUpload;
    const fd = new FormData();

    for(let i =0; i < files.length; i++){
      fd.append("avatarImage", files[i], files[i]['name']);
      fd.append('name', this.form.value.name);
      fd.append('description', this.form.value.description);
  }


    //this.http.post('http://localhost:3007/teachers', fd)
    this.http.post('http://chervicontraining.com:3000/teachers',fd)  
    .subscribe(res => {
        console.log(res);
      })
  }


  provinces: Array<string> = [
    'East New Britain',
    'West New Britain',
    'New Ireland',
    'Manus',
    'East Sepik',
    'West Sepik',
    'Morobe',
    'Central',
    'Madang',
    'Southern Highlands',
    'Oro',
    'Milne Bay',
    'Eastern Highlands',
    'Western Highlands',
    'Southern Highlands',
    'Western',
    'Gulf'
  ];




  /**createProfessional(){
upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
    this.http.post('http://localhost:3003/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}
  }**/




}

