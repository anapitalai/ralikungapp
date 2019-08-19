import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, Http,RequestOptions } from '@angular/http';
//import { HttpClientModule} from '@angular/common/http';
import {AuthHttp,AuthConfig} from 'angular2-jwt';
import {FileUploadModule} from 'ng2-file-upload';

//home
import {HomeComponent} from './home/home.component';

import { ProfessionalService } from './shared/services/professional.service';

import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalsListComponent } from './professionals/professionals-list/professionals-list.component';
import { ProfessionalEditComponent } from './professionals/professional-edit/professional-edit.component';
import { ProfessionalSingleComponent } from './professionals/professional-single/professional-single.component';
import { ProfessionalCreateComponent } from './professionals/professional-create/professional-create.component';

import { TeacherService } from './shared/services/teacher.service';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
import { TeachersSingleComponent } from './teachers/teachers-single/teachers-single.component';
import { TeachersCreateComponent } from './teachers/teachers-create/teachers-create.component';
import { TeachersEditComponent } from './teachers/teachers-edit/teachers-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { DashboardService } from './shared/services/dashboard.service';

//dashboard
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
import {DashboardCreateComponent} from './dashboard/dashboard-create/dashboard-create.component';
import {DashboardEditComponent} from './dashboard/dashboard-edit/dashboard-edit.component';
import {DashboardSingleComponent} from './dashboard/dashboard-single/dashboard-single.component';

//uploads
import {UploadCreateComponent} from './upload/upload-create/upload-create.component';
import {UploadService} from './shared/services/upload.service';

import { routing } from './app.routing';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

export function authHttpFactory(http:Http,options:RequestOptions){
  return new AuthHttp(new AuthConfig({
    tokenGetter:(()=>localStorage.getItem('access_token')),
    noJwtError:true
  }),http,options);
}


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    routing
     ],
  declarations: [ 
    AppComponent,
    //home
    HomeComponent,
    //teachers
    TeachersListComponent,
    TeachersSingleComponent,
    TeachersEditComponent,
    TeachersCreateComponent,
    TeachersComponent,

    //Professional
    ProfessionalsComponent,
    ProfessionalsListComponent,
    ProfessionalSingleComponent,
    ProfessionalEditComponent,
    ProfessionalCreateComponent,
    //upload
    UploadCreateComponent,
    //Dashboard
    DashboardComponent,
    DashboardCreateComponent,
    DashboardListComponent,
    DashboardEditComponent,
    DashboardSingleComponent,
    AuthComponent
   ],
  bootstrap: [ AppComponent ],
  providers:[
    TeacherService,
    {
      provide:AuthHttp,
      useFactory:authHttpFactory,
      deps:[Http,RequestOptions]
    },
    ProfessionalService,
    UploadService,
    AuthService,
    DashboardService,
    AuthGuard
    
  ]
})
export class AppModule {}