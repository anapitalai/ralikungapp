"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
//import { HttpClientModule} from '@angular/common/http';
var angular2_jwt_1 = require("angular2-jwt");
var ng2_file_upload_1 = require("ng2-file-upload");
//home
var home_component_1 = require("./home/home.component");
var professional_service_1 = require("./shared/services/professional.service");
var professionals_component_1 = require("./professionals/professionals.component");
var professionals_list_component_1 = require("./professionals/professionals-list/professionals-list.component");
var professional_edit_component_1 = require("./professionals/professional-edit/professional-edit.component");
var professional_single_component_1 = require("./professionals/professional-single/professional-single.component");
var professional_create_component_1 = require("./professionals/professional-create/professional-create.component");
var teacher_service_1 = require("./shared/services/teacher.service");
var teachers_component_1 = require("./teachers/teachers.component");
var teachers_list_component_1 = require("./teachers/teachers-list/teachers-list.component");
var teachers_single_component_1 = require("./teachers/teachers-single/teachers-single.component");
var teachers_create_component_1 = require("./teachers/teachers-create/teachers-create.component");
var teachers_edit_component_1 = require("./teachers/teachers-edit/teachers-edit.component");
var auth_component_1 = require("./auth/auth.component");
var auth_service_1 = require("./shared/services/auth.service");
var auth_guard_service_1 = require("./shared/guards/auth-guard.service");
var dashboard_service_1 = require("./shared/services/dashboard.service");
//dashboard
var dashboard_component_1 = require("./dashboard/dashboard.component");
var dashboard_list_component_1 = require("./dashboard/dashboard-list/dashboard-list.component");
var dashboard_create_component_1 = require("./dashboard/dashboard-create/dashboard-create.component");
var dashboard_edit_component_1 = require("./dashboard/dashboard-edit/dashboard-edit.component");
var dashboard_single_component_1 = require("./dashboard/dashboard-single/dashboard-single.component");
//uploads
var upload_create_component_1 = require("./upload/upload-create/upload-create.component");
var upload_service_1 = require("./shared/services/upload.service");
var app_routing_1 = require("./app.routing");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/throw");
function authHttpFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        tokenGetter: (function () { return localStorage.getItem('access_token'); }),
        noJwtError: true
    }), http, options);
}
exports.authHttpFactory = authHttpFactory;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                ng2_file_upload_1.FileUploadModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                //home
                home_component_1.HomeComponent,
                //teachers
                teachers_list_component_1.TeachersListComponent,
                teachers_single_component_1.TeachersSingleComponent,
                teachers_edit_component_1.TeachersEditComponent,
                teachers_create_component_1.TeachersCreateComponent,
                teachers_component_1.TeachersComponent,
                //Professional
                professionals_component_1.ProfessionalsComponent,
                professionals_list_component_1.ProfessionalsListComponent,
                professional_single_component_1.ProfessionalSingleComponent,
                professional_edit_component_1.ProfessionalEditComponent,
                professional_create_component_1.ProfessionalCreateComponent,
                //upload
                upload_create_component_1.UploadCreateComponent,
                //Dashboard
                dashboard_component_1.DashboardComponent,
                dashboard_create_component_1.DashboardCreateComponent,
                dashboard_list_component_1.DashboardListComponent,
                dashboard_edit_component_1.DashboardEditComponent,
                dashboard_single_component_1.DashboardSingleComponent,
                auth_component_1.AuthComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                teacher_service_1.TeacherService,
                {
                    provide: angular2_jwt_1.AuthHttp,
                    useFactory: authHttpFactory,
                    deps: [http_1.Http, http_1.RequestOptions]
                },
                professional_service_1.ProfessionalService,
                upload_service_1.UploadService,
                auth_service_1.AuthService,
                dashboard_service_1.DashboardService,
                auth_guard_service_1.AuthGuard
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map