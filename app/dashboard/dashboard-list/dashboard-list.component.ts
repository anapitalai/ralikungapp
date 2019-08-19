import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../../shared/models/user';
import { DashboardService } from '../../shared/services/dashboard.service';
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
  templateUrl:'./app/dashboard/dashboard-list/dashboard-list.component.html' 
})
export class DashboardListComponent implements OnInit {
  users:User[];
  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(users=>this.users=users);
  }
    
  constructor(private service: DashboardService) {}

}