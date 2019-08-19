import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from  './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalsListComponent } from './professionals/professionals-list/professionals-list.component';
import { ProfessionalCreateComponent } from './professionals/professional-create/professional-create.component';
import { ProfessionalSingleComponent } from './professionals/professional-single/professional-single.component';
import { ProfessionalEditComponent } from './professionals/professional-edit/professional-edit.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
import {DashboardCreateComponent} from './dashboard/dashboard-create/dashboard-create.component';
import {DashboardEditComponent} from './dashboard/dashboard-edit/dashboard-edit.component';
import {DashboardSingleComponent} from './dashboard/dashboard-single/dashboard-single.component';


import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
import { TeachersSingleComponent } from './teachers/teachers-single/teachers-single.component';
import { TeachersCreateComponent } from './teachers/teachers-create/teachers-create.component';
import { TeachersEditComponent } from './teachers/teachers-edit/teachers-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/guards/auth-guard.service';

import {UploadCreateComponent} from './upload/upload-create/upload-create.component';

export const routes:Routes=[
    {
        path:'home',
        component:HomeComponent
        //redirectTo:'',
        //pathMatch: 'full'
    },

    {
        path:'login',
        component:AuthComponent
    },
    //upload route
    {
        path:'upload',
        component:UploadCreateComponent
    },


    {
        path:'teachers',
       // canActivate:[AuthGuard],
        component:TeachersComponent,
        // canActivateChild:[AuthGuard],
        children:[{
            path:'',
            component:TeachersListComponent
        },
        {
            path:'create',
            component:TeachersCreateComponent,
            //canActivate:[AuthGuard],
        },
        {
            path:':id',
            component:TeachersSingleComponent
        },
        {
            path:':id/edit',
            component:TeachersEditComponent
        }
   
        ]

        
    },
    {
        path:'professionals',
        //canActivate:[AuthGuard],
        component:ProfessionalsComponent,
        children:[
            {
                path:'',
                component:ProfessionalsListComponent 
            },
            {
                path:'create',
                component:ProfessionalCreateComponent,
                //canActivate:[AuthGuard],
            },
            {
                path:':id',
                component:ProfessionalSingleComponent
            },
            {
                path:':id/edit',
                component:ProfessionalEditComponent
            }
        ]
    },
    {
        path:'dashboard',
        //canActivate:[AuthGuard],
        component:DashboardComponent,
        children:[{
            path:'',
            component:DashboardListComponent
        },
        {
            path:'create',
            component:DashboardCreateComponent
        }
        ,
        {
            path:':id',
            component:DashboardSingleComponent
        },
        {
            path:':id/edit',
            component:DashboardEditComponent
        }
   
   
        ]

        
    }


];



export const routing:ModuleWithProviders=RouterModule.forRoot(routes);