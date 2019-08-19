import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Http } from '@angular/http';
import { Teacher } from '../../shared/models/teacher';
import { TeacherService } from '../../shared/services/teacher.service';

@Component({
  styles:[
  ` 
   .alink{
     cursor:pointer;
   }
   .img-circle{
     width:120px;
     heigth:120px;
   }

   .img-parent{
    display:flex;
    justify-content:center;
  }

    `
  ],
  templateUrl:'./app/teachers/teachers-single/teachers-single.component.html' 
})
export class TeachersSingleComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router:Router,
              private service:TeacherService) {}
          

  teachers:Teacher;
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getContact(_id)
    .subscribe(teachers=>this.teachers=teachers);
  }
    
  teacherDelete(){
    this.service.teacherDelete(this.teachers._id)
    .subscribe(data=>{
      this.router.navigate(['/teachers']);
    })
  }

}