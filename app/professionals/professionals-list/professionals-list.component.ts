import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Professional } from '../../shared/models/professional';
import { ProfessionalService } from '../../shared/services/professional.service';
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
  templateUrl:'./app/professionals/professionals-list/professionals-list.component.html' 
})
export class ProfessionalsListComponent implements OnInit {
  professionals:Professional[];
  ngOnInit(): void {
    this.service.getProfessionals()
    .subscribe(professionals=>this.professionals=professionals);
  }
    
  constructor(private service: ProfessionalService,private auth:AuthService) {}

}