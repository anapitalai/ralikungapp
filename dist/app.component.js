"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var teacher_service_1 = require("./shared/services/teacher.service");
var auth_service_1 = require("./shared/services/auth.service");
var dashboard_service_1 = require("./shared/services/dashboard.service");
var AppComponent = (function () {
    function AppComponent(service, authService, dashboardService, router) {
        this.service = service;
        this.authService = authService;
        this.dashboardService = dashboardService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getContacts()
            .subscribe(function (teachers) { return _this.teachers = teachers; });
    };
    AppComponent.prototype.profile = function () {
        console.log(this.dashboardService.getUsers());
    };
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.authService.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n    a{cursor:pointer;}\n    .profile{max-width:50px;}\n  "],
            template: "\n\n  <nav class='navbar navbar-default'>\n\n     <div class='container-fluid'>\n\n        <div class='navbar-header'>\n             <a routerLink='/home' class='navbar-brand'>RALIKU WAPP</a>\n        </div>\n        <div>     \n             <ul class='nav navbar-nav'>\n               <li><a routerLink='/teachers'>Properties</a></li>\n             </ul>\n          <ul class='nav navbar-nav'>\n             <li><a routerLink='/dashboard'>Dashboard</a></li>\n          </ul>\n        <div class=\"container-fluid\">  \n          <ul class='nav navbar-nav navbar-right'>\n                <li *ngIf=\"!isLoggedIn\"><a routerLink=\"/login\">Login</a></li>\n                <li *ngIf=\"isLoggedIn\"><a (click) =\"logout()\">Logout</a></li>\n                <li *ngIf=\"isLoggedIn\"><a><img src='app/images/ej.jpg' alt=\"profile image\" class=\"profile img-circle img-responsive\"></a></li>\n          </ul>\n        </div>\n           \n        </div>\n\n      \n    </div>\n \n   \n  \n  </nav>\n\n  <router-outlet></router-outlet>\n   \n\n  "
        }),
        __metadata("design:paramtypes", [teacher_service_1.TeacherService, auth_service_1.AuthService, dashboard_service_1.DashboardService,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map