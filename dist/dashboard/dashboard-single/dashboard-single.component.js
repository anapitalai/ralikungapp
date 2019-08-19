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
var DashboardSingleComponent = (function () {
    function DashboardSingleComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    DashboardSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _id = this.route.snapshot.params['id'];
        this.service.getUser(_id)
            .subscribe(function (user) { return _this.user = user; });
    };
    DashboardSingleComponent.prototype.deleteUser = function () {
        var _this = this;
        this.service.userDelete(this.user._id)
            .subscribe(function (data) {
            _this.router.navigate(['/dashboard']);
        });
    };
    DashboardSingleComponent = __decorate([
        core_1.Component({
            templateUrl: './app/dashboard/dashboard-single/dashboard-single.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            dashboard_service_1.DashboardService])
    ], DashboardSingleComponent);
    return DashboardSingleComponent;
}());
exports.DashboardSingleComponent = DashboardSingleComponent;
//# sourceMappingURL=dashboard-single.component.js.map