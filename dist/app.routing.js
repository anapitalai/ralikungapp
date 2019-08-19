"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var teachers_component_1 = require("./teachers/teachers.component");
var professionals_component_1 = require("./professionals/professionals.component");
var professionals_list_component_1 = require("./professionals/professionals-list/professionals-list.component");
var professional_create_component_1 = require("./professionals/professional-create/professional-create.component");
var professional_single_component_1 = require("./professionals/professional-single/professional-single.component");
var professional_edit_component_1 = require("./professionals/professional-edit/professional-edit.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var dashboard_list_component_1 = require("./dashboard/dashboard-list/dashboard-list.component");
var dashboard_create_component_1 = require("./dashboard/dashboard-create/dashboard-create.component");
var dashboard_edit_component_1 = require("./dashboard/dashboard-edit/dashboard-edit.component");
var dashboard_single_component_1 = require("./dashboard/dashboard-single/dashboard-single.component");
var teachers_list_component_1 = require("./teachers/teachers-list/teachers-list.component");
var teachers_single_component_1 = require("./teachers/teachers-single/teachers-single.component");
var teachers_create_component_1 = require("./teachers/teachers-create/teachers-create.component");
var teachers_edit_component_1 = require("./teachers/teachers-edit/teachers-edit.component");
var auth_component_1 = require("./auth/auth.component");
var upload_create_component_1 = require("./upload/upload-create/upload-create.component");
exports.routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
        //redirectTo:'',
        //pathMatch: 'full'
    },
    {
        path: 'login',
        component: auth_component_1.AuthComponent
    },
    //upload route
    {
        path: 'upload',
        component: upload_create_component_1.UploadCreateComponent
    },
    {
        path: 'teachers',
        // canActivate:[AuthGuard],
        component: teachers_component_1.TeachersComponent,
        // canActivateChild:[AuthGuard],
        children: [{
                path: '',
                component: teachers_list_component_1.TeachersListComponent
            },
            {
                path: 'create',
                component: teachers_create_component_1.TeachersCreateComponent,
            },
            {
                path: ':id',
                component: teachers_single_component_1.TeachersSingleComponent
            },
            {
                path: ':id/edit',
                component: teachers_edit_component_1.TeachersEditComponent
            }
        ]
    },
    {
        path: 'professionals',
        //canActivate:[AuthGuard],
        component: professionals_component_1.ProfessionalsComponent,
        children: [
            {
                path: '',
                component: professionals_list_component_1.ProfessionalsListComponent
            },
            {
                path: 'create',
                component: professional_create_component_1.ProfessionalCreateComponent,
            },
            {
                path: ':id',
                component: professional_single_component_1.ProfessionalSingleComponent
            },
            {
                path: ':id/edit',
                component: professional_edit_component_1.ProfessionalEditComponent
            }
        ]
    },
    {
        path: 'dashboard',
        //canActivate:[AuthGuard],
        component: dashboard_component_1.DashboardComponent,
        children: [{
                path: '',
                component: dashboard_list_component_1.DashboardListComponent
            },
            {
                path: 'create',
                component: dashboard_create_component_1.DashboardCreateComponent
            },
            {
                path: ':id',
                component: dashboard_single_component_1.DashboardSingleComponent
            },
            {
                path: ':id/edit',
                component: dashboard_edit_component_1.DashboardEditComponent
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map