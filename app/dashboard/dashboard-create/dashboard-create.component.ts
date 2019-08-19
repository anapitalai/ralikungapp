import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../../shared/models/user';
import { DashboardService } from '../../shared/services/dashboard.service';
@Component({
  styles:[`
  input.ng-valid.ng-touched{
    border-left:5px solid green;
  }
  input.ng-invalid.ng-touched{
    border-left:5px solid red;
  }

 `],
  templateUrl:'./app/dashboard/dashboard-create/dashboard-create.component.html' 
})
export class DashboardCreateComponent implements OnInit {
  constructor(private router: Router,private service:DashboardService) {}

  user:User={email:'',password:''};
  errorMessage:string='';
  successMessage:string='';

  ngOnInit() {
  }
    
  createUser(){
    this.successMessage='';
    this.errorMessage='';

    this.service.createUser(this.user)
    .subscribe(user=>{
      this.successMessage='User was created';
      this.router.navigate(['/dashboard']);
      console.log('User profile created');
    })
  }

}