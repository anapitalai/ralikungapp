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
var dashboard_service_1 = require("../../shared/services/dashboard.service");
var DashboardEditComponent = (function () {
    function DashboardEditComponent(route, service) {
        this.route = route;
        this.service = service;
        this.successMessage = '';
        this.errorMessage = '';
    }
    DashboardEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getUser(_id)
            .subscribe(function (user) { return _this.user = user; });
    };
    DashboardEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.service.updateUser(this.user)
            .subscribe(function (user) {
            //method to update date of edit
            _this.updater();
            _this.successMessage = 'Profile was updated.';
            console.log('Profile updated');
        }, function (err) {
            _this.errorMessage = 'Contact cant be updated!';
            console.error(err);
        });
        this.errorMessage = '';
        this.successMessage = '';
    };
    //date updater
    DashboardEditComponent.prototype.updater = function () {
        var _this = this;
        this.service.updater(this.user)
            .subscribe(function (user) {
            //method to update date of edit
            _this.successMessage = 'Update date logged.';
            console.log('Update date updated');
        }, function (err) {
            _this.errorMessage = 'date cant be updated!';
            console.error(err);
        });
        this.errorMessage = '';
        this.successMessage = '';
    };
    DashboardEditComponent = __decorate([
        core_1.Component({
            templateUrl: './app/dashboard/dashboard-edit/dashboard-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, dashboard_service_1.DashboardService])
    ], DashboardEditComponent);
    return DashboardEditComponent;
}());
exports.DashboardEditComponent = DashboardEditComponent;
//# sourceMappingURL=dashboard-edit.component.js.map