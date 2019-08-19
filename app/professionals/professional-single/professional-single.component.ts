import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Http } from '@angular/http';
import { Professional } from '../../shared/models/professional';
import { ProfessionalService } from '../../shared/services/professional.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  styles:[`
  .img-circle{
    width:320px;
    heigth:320px;
  }
     .img-parent{
       display:flex;
       justify-content:center;
     }
  `
  ],
  templateUrl:'./app/professionals/professional-single/professional-single.component.html' 
})
export class ProfessionalSingleComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router:Router,
              private authService:AuthService,
              private service:ProfessionalService) {}

  professional:Professional;
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.service.getProfessional(_id)
    .subscribe(professional=>this.professional=professional);
  }
    
  deleteProfessional(){
    this.service.deleteProfessional(this.professional._id)
    .subscribe(data=>{
      this.router.navigate(['/professionals']);
    })
  }

}