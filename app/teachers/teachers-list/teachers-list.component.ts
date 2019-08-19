import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Teacher } from '../../shared/models/teacher';
import { TeacherService } from '../../shared/services/teacher.service';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  styles:[`
   .user-card{cursor:pointer;
    align-items::center;
  }
  .user-card:hover{
    background:grey;
    border-radius:20px;
    
  }


  img{
    width:150px;
    height:150px;

  }
  `],
  templateUrl:'./app/teachers/teachers-list/teachers-list.component.html' 
})
export class TeachersListComponent implements OnInit {
  teachers:Teacher[];
  ngOnInit(): void {
    this.service.getContacts()
    .subscribe(teachers=>this.teachers=teachers);
  }
    
  constructor(private service: TeacherService,private auth:AuthService) {}

}