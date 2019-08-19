import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../../shared/models/user';
import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  templateUrl:'./app/dashboard/dashboard-single/dashboard-single.component.html' 
})
export class DashboardSingleComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router:Router,
              private service:DashboardService) {}

  user:User;
  ngOnInit() {

    let _id=this.route.snapshot.params['id'];
    this.service.getUser(_id)
    .subscribe(user=>this.user=user);
  }
    
  deleteUser(){
    this.service.userDelete(this.user._id)
    .subscribe(data=>{
      this.router.navigate(['/dashboard']);
    })
  }

}