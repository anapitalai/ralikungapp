import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Teacher } from '../../shared/models/teacher';
import { TeacherService } from '../../shared/services/teacher.service';

@Component({
  templateUrl:'./app/teachers/teachers-edit/teachers-edit.component.html' 
})
export class TeachersEditComponent implements OnInit {
  constructor(private route: ActivatedRoute,private service:TeacherService) {}

  teacher:Teacher;
  successMessage:string='';
  errorMessage:string='';
  
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getContact(_id)
    .subscribe(teacher=>this.teacher=teacher);
  }
    
   updateContact(){
     this.service.updateContact(this.teacher)
     .subscribe(teacher=>{
       this.successMessage='Profile was updated.';
       console.log('Profile updated');
     },
     err=>{
      this.errorMessage='Contact cant be updated!';
      console.error(err);
     }
    );
    
    this.errorMessage='';
    this.successMessage='';

   }

}