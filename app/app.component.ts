import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Teacher } from './shared/models/teacher';
import { User } from './shared/models/user';
import { TeacherService } from './shared/services/teacher.service';
import { AuthService } from './shared/services/auth.service';
import { DashboardService } from './shared/services/dashboard.service';
@Component({
  selector: 'my-app',
  styles: [`
    a{cursor:pointer;}
    .profile{max-width:50px;}
  `],
  template: `

  <nav class='navbar navbar-default'>

     <div class='container-fluid'>

        <div class='navbar-header'>
             <a routerLink='/home' class='navbar-brand'>RALIKU WAPP</a>
        </div>
        <div>     
             <ul class='nav navbar-nav'>
               <li><a routerLink='/teachers'>Properties</a></li>
             </ul>
          <ul class='nav navbar-nav'>
             <li><a routerLink='/dashboard'>Dashboard</a></li>
          </ul>
        <div class="container-fluid">  
          <ul class='nav navbar-nav navbar-right'>
                <li *ngIf="!isLoggedIn"><a routerLink="/login">Login</a></li>
                <li *ngIf="isLoggedIn"><a (click) ="logout()">Logout</a></li>
                <li *ngIf="isLoggedIn"><a><img src='app/images/ej.jpg' alt="profile image" class="profile img-circle img-responsive"></a></li>
          </ul>
        </div>
           
        </div>

      
    </div>
 
   
  
  </nav>

  <router-outlet></router-outlet>
   

  `

})
export class AppComponent implements OnInit {


  teachers: Teacher[];
  users: User[];

  constructor(private service: TeacherService, private authService: AuthService, private dashboardService: DashboardService
    , private router: Router) { }

  ngOnInit(): void {
    this.service.getContacts()
      .subscribe(teachers => this.teachers = teachers,

      );
  }

 profile(){
   console.log(this.dashboardService.getUsers());
   
 }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}