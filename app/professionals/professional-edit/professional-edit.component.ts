import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Professional } from '../../shared/models/professional';
import { ProfessionalService } from '../../shared/services/professional.service';

@Component({
  templateUrl:'./app/professionals/professional-edit/professional-edit.component.html' 
})
export class ProfessionalEditComponent implements OnInit {
  constructor(private route: ActivatedRoute,private service:ProfessionalService) {}

  professional:Professional;
  successMessage:string='';
  errorMessage:string='';
  
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getProfessional(_id)
    .subscribe(professional=>this.professional=professional);
  }
    
   updateProfessional(){
     this.service.updateProfessional(this.professional)
     .subscribe(teacher=>{
       this.successMessage='Profile was updated.';
       console.log('Professional  updated');
     },
     err=>{
      this.errorMessage='Professional cant be updated!';
      console.error(err);
     }
    );
    
    this.errorMessage='';
    this.successMessage='';

   }

}