import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Teacher } from '../shared/models/teacher';
import { TeacherService } from '../shared/services/teacher.service';
@Component({
  selector: 'my-professionals',
 
  templateUrl:'./app/professionals/professionals.component.html'
})
export class ProfessionalsComponent implements OnInit {
  successMessage:string ='';
  errorMessage:string ='';
  

  constructor(private service:TeacherService){}


  ngOnInit(){
    this.service.contactCreated$.subscribe(teacher=>{
    this.successMessage=`${teacher.name} has been created`;
    this.clearMessages();
    });

    this.service.contactDeleted$.subscribe(()=>{
      this.successMessage= `The teacher has been deleted`;
      this.clearMessages();
      });
  }
//clear messages emthod
clearMessages(){
  setTimeout(()=>{
    this.errorMessage='';
    this.successMessage='';
  },2000);

}
}