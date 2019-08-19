import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Teacher } from '../shared/models/teacher';
import { TeacherService } from '../shared/services/teacher.service';
import { AuthService } from '../shared/services/auth.service';
@Component({
  templateUrl:'./app/home/home.component.html' 
})
export class HomeComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router ) {}
  teacher:Teacher;
  credentials={email:'',password:''};
  errorMessage:string='';
  successMessage:string='';

  ngOnInit() {}

 

  login(){
    this.errorMessage='';
      this.authService.login(this.credentials.email,this.credentials.password)
      .subscribe(data=>{
        this.router.navigate(['/']);
        console.log(data);
      },
      err=>{
        this.errorMessage=err;
        console.error(err)
      }
    );
  }


}